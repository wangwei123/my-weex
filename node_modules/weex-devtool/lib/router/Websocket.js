'use strict';

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by godsong on 16/6/13.
 */
var Router = require('koa-router');
var P2PSession = require('../components/P2PSession');
var DeviceManager = require('../components/DeviceManager');
var MemoryFile = require('../components/MemoryFile');
var Uuid = require('../util/Uuid');
var Logger = require('../components/Logger');
var Config = require('../components/Config');
var MessageBus = require('../components/MessageBus');
var bundleWrapper = require('../util/BundleWrapper');
var JavaScriptObfuscator = require('javascript-obfuscator');
var Crypto = require('crypto');
var wsRouter = Router();
var chromeWsIndex = 2;
var nativeWsIndex = 1;
function _toFixed(num) {
    var s = num.toString(16);
    if (s.length % 2 == 1) {
        return '0' + s;
    } else return s;
}
wsRouter.all('/debugProxy/inspector/:sessionId', _regenerator2.default.mark(function _callee(next) {
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    Logger.debug('new inspector client connected,join[' + this.params.sessionId + ' -0x' + _toFixed(chromeWsIndex) + ']');
                    this.websocket._info = 'chrome-inspector[' + this.params.sessionId + '-0x' + _toFixed(chromeWsIndex++) + ']';
                    P2PSession.join(this.params.sessionId, this.websocket);
                    this.websocket.on('message', function (message) {
                        message = JSON.parse(message);
                        P2PSession.postMessage(this, message);
                    });
                    _context.next = 6;
                    return next;

                case 6:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
}));
wsRouter.all('/debugProxy/debugger/:sessionId', _regenerator2.default.mark(function _callee2(next) {
    return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    Logger.debug('new debugger client connected,join[' + this.params.sessionId + '-0x' + _toFixed(chromeWsIndex) + ']');
                    this.websocket._info = 'chrome-debugger[' + this.params.sessionId + '-0x' + _toFixed(chromeWsIndex++) + ']';
                    if (!P2PSession.join(this.params.sessionId, this.websocket)) {
                        //P2PSession.postMessage(this.websocket, {method: "WxDebug.reload"});
                    } else {
                            //console.log('enable remote debug');
                            //P2PSession.postMessage(this.websocket, {method: "WxDebug.enable"});
                        }
                    this.websocket.on('message', function (message) {
                        message = JSON.parse(message);
                        Logger.printMessage(message, 'chrome');
                        if (message.method === 'WxDebug.enable' || message.method === 'WxDebug.disable') {
                            var peer = P2PSession.findOppositePeer(this);
                            if (peer) {
                                var device = DeviceManager.getDeviceById(peer.websocket._deviceId);
                                if (device) {
                                    device.deviceInfo.remoteDebug = message.method === 'WxDebug.enable' ? true : false;
                                }
                            }
                        }
                        P2PSession.postMessage(this, message);
                    });
                    _context2.next = 6;
                    return next;

                case 6:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _callee2, this);
}));
DeviceManager.on('update', function (deviceList) {
    listPageWebsocket.forEach(function (ws) {
        if (ws.readyState == 1) {
            ws.send(JSON.stringify({ method: "WxDebug.pushDeviceList", params: deviceList }));
        }
    });
});
var listPageWebsocket = [];
MessageBus.on('page.refresh', function () {
    DeviceManager.getDeviceList().forEach(function (device) {
        var devicePeer = device.debuggerSession.findPeer(device.websocket);
        if (device.deviceInfo.platform.toLowerCase() == 'android' && device.deviceInfo.devtoolVersion >= '0.0.8.5' || device.deviceInfo.platform.toLowerCase() == 'ios' && device.deviceInfo.devtoolVersion >= '0.8.0') {
            devicePeer.send({ method: 'WxDebug.refresh' });
        } else {
            devicePeer.send({ method: 'WxDebug.reload' });
        }
        //device.debuggerSession.postMessage(device.websocket, {method: 'WxDebug.refresh'})
    });
    /* listPageWebsocket.forEach(ws=> {
     ws.send(JSON.stringify({method: "WxDebug.refreshPage"}));
     })*/
});
wsRouter.all('/debugProxy/list', _regenerator2.default.mark(function _callee3(next) {
    return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                    listPageWebsocket.push(this.websocket);
                    this.websocket.on('close', function () {
                        var _this = this;

                        listPageWebsocket = listPageWebsocket.filter(function (ws) {
                            return ws !== _this;
                        });
                    });
                    this.websocket.on('message', function (messageText) {
                        var message = JSON.parse(messageText);
                        if (message.method == 'WxDebug.setLogLevel') {

                            var device = DeviceManager.getDeviceById(message.params.deviceId);
                            if (device && device.websocket.readyState == 1) {
                                device.deviceInfo.logLevel = message.params.logLevel;
                                var targetMsg = { method: 'WxDebug.setLogLevel', params: { logLevel: message.params.data } };
                                device.websocket.send(JSON.stringify(targetMsg));
                            } else {
                                Logger.debug(message.params.deviceId);
                            }
                        } else if (message.method == 'WxDebug.setRemoteDebug') {
                            var _device = DeviceManager.getDeviceById(message.params.deviceId);
                            if (_device && _device.websocket.readyState == 1) {
                                _device.deviceInfo.remoteDebug = message.params.data;
                                _device.websocket.send(JSON.stringify({ method: 'WxDebug.' + (message.params.data ? 'enable' : 'disable') }));
                            }
                        } else if (message.method == 'WxDebug.setElementMode') {
                            var _device2 = DeviceManager.getDeviceById(message.params.deviceId);
                            if (_device2 && _device2.websocket.readyState == 1) {
                                _device2.deviceInfo.elementMode = message.params.data;
                                _device2.websocket.send(JSON.stringify({
                                    method: 'WxDebug.setElementMode',
                                    params: { mode: message.params.data }
                                }));
                            }
                        } else if (message.method == 'WxDebug.refreshDevice') {
                            var _device3 = DeviceManager.getDeviceById(message.params.deviceId);
                            if (_device3 && _device3.websocket.readyState == 1) {
                                _device3.websocket.send(JSON.stringify({ method: 'WxDebug.reload' }));
                            }
                        } else if (message.method == 'WxDebug.network') {
                            var _device4 = DeviceManager.getDeviceById(message.params.deviceId);
                            if (_device4 && _device4.websocket.readyState == 1) {
                                console.log(message);
                                _device4.deviceInfo.network = message.params.enable;
                                _device4.websocket.send(JSON.stringify({
                                    method: 'WxDebug.network', params: {
                                        enable: message.params.enable
                                    }
                                }));
                            }
                        }
                    });
                    if (this.websocket.readyState == 1) {
                        this.websocket.send(JSON.stringify({
                            method: "WxDebug.pushDeviceList",
                            params: DeviceManager.getDeviceListInfo()
                        }));
                        if (Config.entryBundleUrl) {
                            this.websocket.send(JSON.stringify({
                                method: "WxDebug.setEntry",
                                params: [Config.entryBundleUrl]
                            }));
                        }
                    }

                case 4:
                case 'end':
                    return _context3.stop();
            }
        }
    }, _callee3, this);
}));

wsRouter.all('/debugProxy/native', _regenerator2.default.mark(function _callee4(next) {
    return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
            switch (_context4.prev = _context4.next) {
                case 0:

                    this.websocket._info = nativeWsIndex.toString(16) + ' unregistered';
                    Logger.debug('new native  client connected：', this.websocket._info);
                    nativeWsIndex++;
                    this.websocket.on('message', function (messageText) {
                        var message = JSON.parse(messageText);
                        Logger.printMessage(message, 'native');
                        var device = DeviceManager.getDevice(this);
                        if (message.method) {
                            var _message$method$split = message.method.split('.'),
                                _message$method$split2 = (0, _slicedToArray3.default)(_message$method$split, 2),
                                domain = _message$method$split2[0],
                                method = _message$method$split2[1];

                            if (domain == 'WxDebug') {
                                if (method == 'registerDevice') {
                                    DeviceManager.registerDevice(message.params, this);
                                    try {
                                        this.send(JSON.stringify({ id: message.id, result: 'ready' }));
                                    } catch (e) {}
                                } else if (method == 'initJSRuntime') {
                                    if (device) {
                                        message.params.url = new MemoryFile('js-framework.js', message.params.source).getUrl();
                                        if (device.deviceInfo.logLevel) {
                                            message.params.env.WXEnvironment.logLevel = device.deviceInfo.logLevel;
                                        }
                                        device.debuggerSession.postMessage(this, message);
                                    } else {
                                        Logger.error('Fatal Error:native device unregistered before initJSRuntime!');
                                    }
                                } else if (method == 'callJS' && message.params.method == 'createInstance') {
                                    if (device) {
                                        var code = message.params.args[1];
                                        if (message.params.args[2] && (message.params.args[2]['debuggable'] === 'false' || message.params.args[2]['debuggable'] === false)) {
                                            var obfuscationResult = JavaScriptObfuscator.obfuscate(message.params.args[1], {
                                                compact: true,
                                                controlFlowFlattening: false,
                                                debugProtection: false,
                                                debugProtectionInterval: false,
                                                disableConsoleOutput: true,
                                                rotateStringArray: true,
                                                selfDefending: true,
                                                stringArray: true,
                                                stringArrayEncoding: false,
                                                stringArrayThreshold: 0.75,
                                                unicodeEscapeSequence: true
                                            });
                                            code = obfuscationResult.getObfuscatedCode();
                                        }
                                        message.params.sourceUrl = new MemoryFile(message.params.args[2].bundleUrl || Uuid() + '.js', bundleWrapper(code)).getUrl();
                                        device.debuggerSession.postMessage(this, message);
                                    } else {
                                        Logger.error('Fatal Error:native device unregistered before createInstance!');
                                    }
                                } else if (method == 'importScript') {
                                    if (device) {
                                        var md5 = Crypto.createHash('md5');
                                        md5.update(message.params.source);
                                        var md5Str = md5.digest('hex');
                                        message.params.sourceUrl = new MemoryFile('imported_' + md5Str + '.js', message.params.source).getUrl();
                                        device.debuggerSession.postMessage(this, message);
                                    } else {
                                        Logger.error('Fatal Error:native device unregistered before createInstance!');
                                    }
                                } else if (method == 'syncReturn') {
                                    MessageBus.emit('sync.return.' + message.params.syncId, {
                                        error: message.error,
                                        ret: message.params.ret
                                    });
                                } else {
                                    if (device) device.debuggerSession.postMessage(this, message);else Logger.error('Fatal Error:native device unregistered before [' + message.method + ']');
                                }
                            } else {
                                if (device) {
                                    if (message.method == 'Page.screencastFrame') {
                                        message.params.sessionId = 1;
                                    }
                                    if (message.method == 'Console.messageAdded' && message.params.message.level === 'error') {
                                        device.debuggerSession.postMessage(this, message);
                                    }
                                    device.inspectorSession.postMessage(this, message);
                                } else Logger.error('Fatal Error:native device unregistered before send inspector protocol [' + message.method + ']');
                            }
                        } else {
                            if (device) {
                                if (message.result && message.result.method === 'WxDebug.syncReturn') {
                                    MessageBus.emit('sync.return.' + message.id, {
                                        error: message.error,
                                        ret: message.result.params.ret
                                    });
                                } else {
                                    device.inspectorSession.postMessage(this, message);
                                }
                            } else Logger.error('Fatal Error:native device unregistered before send inspector protocol');
                        }
                    });
                    this.websocket.on('close', function () {
                        if (!this.removed) {
                            var device = DeviceManager.getDevice(this);
                            if (device) {
                                DeviceManager.removeDeviceDelayed(device, 3000);
                            }
                        }
                    });
                    _context4.next = 7;
                    return next;

                case 7:
                case 'end':
                    return _context4.stop();
            }
        }
    }, _callee4, this);
}));
module.exports = wsRouter;
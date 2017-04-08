// { "framework": "Vue" }

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * @author walid
	 * @date 2016/03/20
	 * @description 程序入口启动配置
	 */

	const App = __webpack_require__(110)

	// 全局注册组件
	Vue.component('osc-root', __webpack_require__(46))
	Vue.component('osc-navpage', __webpack_require__(50))
	Vue.component('osc-navbar', __webpack_require__(54))
	Vue.component('osc-tabbar', __webpack_require__(58))
	Vue.component('osc-list', __webpack_require__(66))
	Vue.component('osc-scroller', __webpack_require__(70))
	Vue.component('wx-button', __webpack_require__(74))
	Vue.component('wx-countdown', __webpack_require__(78))
	Vue.component('wx-hn', __webpack_require__(82))
	Vue.component('wx-list-item', __webpack_require__(86))
	Vue.component('wx-marquee', __webpack_require__(90))
	Vue.component('wx-navbar', __webpack_require__(94))
	Vue.component('wx-navpage', __webpack_require__(98))
	Vue.component('wx-panel', __webpack_require__(102))
	Vue.component('wx-tabbar', __webpack_require__(106))
	Vue.component('wx-tabitem', __webpack_require__(110))
	Vue.component('wx-tip', __webpack_require__(114))
	Vue.component('wx-tab', __webpack_require__(118))
	Vue.component('wx-tab-item', __webpack_require__(123))

	App.el = '#root'
	new Vue(App)


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @author walid
	 * @date 2017/3/4
	 * @description 路由名字配置
	 */

	exports.default = {
	  home: {
	    title: '首页',
	    path: '/home',
	    jsPath: 'views/home/index',
	    component: __webpack_require__(4)
	  },
	  launch: {
	    title: '发起筹款',
	    path: '/launch',
	    jsPath: 'views/launch/app',
	    component: __webpack_require__(8)
	  },
	  mine: {
	    title: '我的',
	    path: '/mine',
	    jsPath: 'views/mine/app',
	    component: __webpack_require__(20)
	  },
	  web: {
	    title: 'syswin web',
	    path: '/web',
	    jsPath: 'views/web/app',
	    component: __webpack_require__(24)
	  },
	  userInfo: {
	    title: '个人资料',
	    path: '/userinfo',
	    jsPath: 'views/userinfo/app',
	    component: __webpack_require__(29)
	  },
	  personal: {
	    title: '个人中心',
	    path: '/personal',
	    jsPath: 'views/personal/app',
	    component: __webpack_require__(33)
	  },
	  list: {
	    title: 'List 组件',
	    path: '/list',
	    jsPath: 'views/list/app',
	    component: __webpack_require__(37)
	  },
	  scroller: {
	    title: 'Scroller 组件',
	    path: '/scroller',
	    jsPath: 'views/scroller/app',
	    component: __webpack_require__(41)
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(5)
	)

	/* script */
	__vue_exports__ = __webpack_require__(6)

	/* template */
	var __vue_template__ = __webpack_require__(7)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/wangwei/WorkSpace/weex-frame/src/views/home/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-5dca073a"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = {
	  "wx-navpage": {
	    "marginTop": 60
	  }
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var animation = weex.requireModule('animation');
	var modal = weex.requireModule('modal');
	module.exports = {
	  data: {
	    navBarHeight: 88,
	    title: 'Navigator1',
	    dir: 'examples',
	    baseURL: '',
	    selectedIndex: 0,
	    isActive: true,
	    index: 0
	  },
	  created: function created() {
	    this.$getConfig(function (config) {
	      var env = config.env;
	      if (env.platform == 'iOS') {
	        var scale = env.scale;
	        var deviceWidth = env.deviceWidth / scale;
	        this.navBarHeight = 64.0 * 750.0 / deviceWidth;
	      }
	    }.bind(this));
	    this.$on('naviBar.rightItem.click', function (e) {
	      duration = 2;
	      this.$call('modal', 'toast', {
	        'message': 'naviBar.rightItem.click',
	        'duration': duration
	      });
	    });
	    this.$on('naviBar.leftItem.click', function (e) {
	      duration = 2;
	      this.$call('modal', 'toast', {
	        'message': 'naviBar.leftItem.click',
	        'duration': duration
	      });
	    });
	  },
	  methods: {
	    myhandler: function myhandler() {
	      // modal.alert({'message': 'test'})
	    }
	  }
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('wx-navpage', {
	    staticClass: ["wx-navpage"],
	    attrs: {
	      "dataRole": "none",
	      "height": _vm.navBarHeight,
	      "backgroundColor": "#ff5898",
	      "title": _vm.title,
	      "titleColor": "white",
	      "leftItemTitle": "More",
	      "leftItemColor": "white",
	      "rightItemSrc": "http://gtms02.alicdn.com/tps/i2/TB1ED7iMpXXXXXEXXXXWA_BHXXX-48-48.png"
	    }
	  }, [_c('wx-tab', {
	    model: {
	      value: (_vm.index),
	      callback: function(value) {
	        _vm.index = value
	      }
	    }
	  }, [_c('wx-tab-item', {
	    attrs: {
	      "selected": ""
	    },
	    on: {
	      "onItemClick": _vm.myhandler
	    }
	  }, [_vm._v("已发货")]), _c('wx-tab-item', {
	    on: {
	      "onItemClick": _vm.myhandler
	    }
	  }, [_vm._v("未发货")]), _c('wx-tab-item', {
	    on: {
	      "onItemClick": _vm.myhandler
	    }
	  }, [_vm._v("测试")]), _c('wx-tab-item', {
	    on: {
	      "onItemClick": _vm.myhandler
	    }
	  }, [_vm._v("全部订单")])], 1)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(9)
	)

	/* script */
	__vue_exports__ = __webpack_require__(10)

	/* template */
	var __vue_template__ = __webpack_require__(19)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/wangwei/WorkSpace/weex-frame/src/views/launch/app.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-9644c5f4"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = {
	  "root": {
	    "width": 750,
	    "height": 1334,
	    "backgroundColor": "#f8f8f8"
	  },
	  "div-header": {
	    "position": "relative",
	    "width": 750,
	    "height": 1334
	  },
	  "img-top": {
	    "width": 750,
	    "height": 1334
	  },
	  "div-content": {
	    "position": "absolute",
	    "top": 0,
	    "display": "flex",
	    "flexDirection": "column",
	    "alignItems": "center",
	    "width": 750,
	    "height": 1334
	  },
	  "p-title": {
	    "marginTop": 300,
	    "color": "#ffffff",
	    "fontSize": 72
	  },
	  "p-description": {
	    "marginTop": 40,
	    "color": "#ffffff",
	    "fontSize": 24
	  },
	  "btn-action": {
	    "marginTop": 70,
	    "width": 367,
	    "height": 77,
	    "borderWidth": 3,
	    "borderColor": "#ffffff",
	    "borderStyle": "solid",
	    "borderRadius": 8,
	    "background": "rgba(0, 0, 0, .17)",
	    "color": "#ffffff",
	    "textAlign": "center",
	    "fontSize": 36,
	    "lineHeight": 77
	  }
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mixins = __webpack_require__(11);

	var _mixins2 = _interopRequireDefault(_mixins);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  mixins: [_mixins2.default],

	  methods: {
	    toLaunch: function toLaunch(event) {
	      this.push({
	        route: this.route.web,
	        query: {
	          url: 'http://www.jianshu.com/u/a279a2f8ed63'
	        }
	      });
	    }
	  }
	}; //
	//
	//
	//

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _navigator = __webpack_require__(12);

	var _navigator2 = _interopRequireDefault(_navigator);

	var _model = __webpack_require__(17);

	var _model2 = _interopRequireDefault(_model);

	var _route = __webpack_require__(3);

	var _route2 = _interopRequireDefault(_route);

	var _imgurl = __webpack_require__(18);

	var _imgurl2 = _interopRequireDefault(_imgurl);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @Author   : walid
	 * @Data     : 2017-03-26  16:46
	 * @Describe : 全局mixins参数配置
	 */

	exports.default = {
	  data: function data() {
	    return {
	      model: _model2.default,
	      route: _route2.default,
	      imgUrl: _imgurl2.default,
	      android: weex.config.env && weex.config.env.platform.toLowerCase() === 'android',
	      ios: weex.config.env && weex.config.env.platform.toLowerCase() === 'ios',
	      web: weex.config.platform && weex.config.platform.toLowerCase() === 'web'
	    };
	  },
	  created: function created() {},


	  methods: {
	    push: function push(_ref) {
	      var route = _ref.route,
	          params = _ref.params,
	          query = _ref.query;

	      if (route === this.route.web) {
	        _navigator2.default.pushWeb(query.url);
	        return;
	      }
	      if (this.web) {
	        this.$router.push({
	          path: route.path,
	          params: params,
	          query: query
	        });
	        return;
	      }
	      _navigator2.default.push(route, query);
	    }
	  }
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                                               * @author walid
	                                                                                                                                                                                                                                                                               * @date 2017/3/4
	                                                                                                                                                                                                                                                                               * @description 界面跳转工具类
	                                                                                                                                                                                                                                                                               */

	var _qs = __webpack_require__(13);

	var _qs2 = _interopRequireDefault(_qs);

	var _config = __webpack_require__(15);

	var _config2 = _interopRequireDefault(_config);

	var _instance = __webpack_require__(16);

	var _instance2 = _interopRequireDefault(_instance);

	var _route = __webpack_require__(3);

	var _route2 = _interopRequireDefault(_route);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var navigator = weex.requireModule('navigator');

	function getBaseUrl() {
	  var bundleUrl = weex.config.bundleUrl;
	  var isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0;
	  var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexFrame.app') > 0;
	  var nativeBase = '';
	  if (isAndroidAssets) {
	    nativeBase = 'file://assets/dist/weex/';
	  } else if (isiOSAssets) {
	    nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('weex/') + 5);
	  } else {
	    var host = _config2.default + ':8080';
	    var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
	    if (matches && matches.length >= 2) {
	      host = matches[1];
	    }
	    nativeBase = 'http://' + host + '/dist/weex/';
	  }
	  var h5Base = '?page=../dist/web/';
	  // // in Browser or WebView
	  var inBrowserOrWebView = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object';
	  return inBrowserOrWebView ? h5Base : nativeBase;
	}

	function pushWeb(url, query) {
	  if (_instance2.default.isWeb()) {
	    pushByUrl(url, query);
	    return;
	  }
	  query = query ? query : {};
	  query.url = url;
	  push(_route2.default.web, query);
	}

	function pushByUrl(url, query) {
	  navigator.push({
	    url: query ? 'url?' + _qs2.default.stringify(query) : url,
	    animated: 'true'
	  }, function (event) {
	    console.log('callback: ', event);
	  });
	}

	function push(route) {
	  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  query.title = route.title | '';
	  var url = query ? '' + getBaseUrl() + route.jsPath + '.js?' + _qs2.default.stringify(query) : '' + getBaseUrl() + route + '.js';
	  navigator.push({
	    url: url,
	    animated: 'true'
	  }, function (event) {
	    console.log('callback: ', event);
	  });
	}

	function pop() {
	  navigator.pop({
	    animated: 'true'
	  }, function (event) {
	    console.log('callback: ', event);
	  });
	}

	exports.default = {
	  push: push, pushByUrl: pushByUrl, getBaseUrl: getBaseUrl, pushWeb: pushWeb, pop: pop
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = __webpack_require__(14);

/***/ },
/* 14 */
/***/ function(module, exports) {

	
	/*!
	 * querystring
	 * Copyright(c) 2010 TJ Holowaychuk <tj@vision-media.ca>
	 * MIT Licensed
	 */

	/**
	 * Library version.
	 */

	exports.version = '0.4.2';

	/**
	 * Object#toString() ref for stringify().
	 */

	var toString = Object.prototype.toString;

	/**
	 * Cache non-integer test regexp.
	 */

	var isint = /^[0-9]+$/;

	function promote(parent, key) {
	  if (parent[key].length == 0) return parent[key] = {};
	  var t = {};
	  for (var i in parent[key]) t[i] = parent[key][i];
	  parent[key] = t;
	  return t;
	}

	function parse(parts, parent, key, val) {
	  var part = parts.shift();
	  // end
	  if (!part) {
	    if (Array.isArray(parent[key])) {
	      parent[key].push(val);
	    } else if ('object' == typeof parent[key]) {
	      parent[key] = val;
	    } else if ('undefined' == typeof parent[key]) {
	      parent[key] = val;
	    } else {
	      parent[key] = [parent[key], val];
	    }
	    // array
	  } else {
	    var obj = parent[key] = parent[key] || [];
	    if (']' == part) {
	      if (Array.isArray(obj)) {
	        if ('' != val) obj.push(val);
	      } else if ('object' == typeof obj) {
	        obj[Object.keys(obj).length] = val;
	      } else {
	        obj = parent[key] = [parent[key], val];
	      }
	      // prop
	    } else if (~part.indexOf(']')) {
	      part = part.substr(0, part.length - 1);
	      if (!isint.test(part) && Array.isArray(obj)) obj = promote(parent, key);
	      parse(parts, obj, part, val);
	      // key
	    } else {
	      if (!isint.test(part) && Array.isArray(obj)) obj = promote(parent, key);
	      parse(parts, obj, part, val);
	    }
	  }
	}

	/**
	 * Merge parent key/val pair.
	 */

	function merge(parent, key, val){
	  if (~key.indexOf(']')) {
	    var parts = key.split('[')
	      , len = parts.length
	      , last = len - 1;
	    parse(parts, parent, 'base', val);
	    // optimize
	  } else {
	    if (!isint.test(key) && Array.isArray(parent.base)) {
	      var t = {};
	      for (var k in parent.base) t[k] = parent.base[k];
	      parent.base = t;
	    }
	    set(parent.base, key, val);
	  }

	  return parent;
	}

	/**
	 * Parse the given obj.
	 */

	function parseObject(obj){
	  var ret = { base: {} };
	  Object.keys(obj).forEach(function(name){
	    merge(ret, name, obj[name]);
	  });
	  return ret.base;
	}

	/**
	 * Parse the given str.
	 */

	function parseString(str){
	  return String(str)
	    .split('&')
	    .reduce(function(ret, pair){
	      try{
	        pair = decodeURIComponent(pair.replace(/\+/g, ' '));
	      } catch(e) {
	        // ignore
	      }

	      var eql = pair.indexOf('=')
	        , brace = lastBraceInKey(pair)
	        , key = pair.substr(0, brace || eql)
	        , val = pair.substr(brace || eql, pair.length)
	        , val = val.substr(val.indexOf('=') + 1, val.length);

	      // ?foo
	      if ('' == key) key = pair, val = '';

	      return merge(ret, key, val);
	    }, { base: {} }).base;
	}

	/**
	 * Parse the given query `str` or `obj`, returning an object.
	 *
	 * @param {String} str | {Object} obj
	 * @return {Object}
	 * @api public
	 */

	exports.parse = function(str){
	  if (null == str || '' == str) return {};
	  return 'object' == typeof str
	    ? parseObject(str)
	    : parseString(str);
	};

	/**
	 * Turn the given `obj` into a query string
	 *
	 * @param {Object} obj
	 * @return {String}
	 * @api public
	 */

	var stringify = exports.stringify = function(obj, prefix) {
	  if (Array.isArray(obj)) {
	    return stringifyArray(obj, prefix);
	  } else if ('[object Object]' == toString.call(obj)) {
	    return stringifyObject(obj, prefix);
	  } else if ('string' == typeof obj) {
	    return stringifyString(obj, prefix);
	  } else {
	    return prefix + '=' + obj;
	  }
	};

	/**
	 * Stringify the given `str`.
	 *
	 * @param {String} str
	 * @param {String} prefix
	 * @return {String}
	 * @api private
	 */

	function stringifyString(str, prefix) {
	  if (!prefix) throw new TypeError('stringify expects an object');
	  return prefix + '=' + encodeURIComponent(str);
	}

	/**
	 * Stringify the given `arr`.
	 *
	 * @param {Array} arr
	 * @param {String} prefix
	 * @return {String}
	 * @api private
	 */

	function stringifyArray(arr, prefix) {
	  var ret = [];
	  if (!prefix) throw new TypeError('stringify expects an object');
	  for (var i = 0; i < arr.length; i++) {
	    ret.push(stringify(arr[i], prefix + '[]'));
	  }
	  return ret.join('&');
	}

	/**
	 * Stringify the given `obj`.
	 *
	 * @param {Object} obj
	 * @param {String} prefix
	 * @return {String}
	 * @api private
	 */

	function stringifyObject(obj, prefix) {
	  var ret = []
	    , keys = Object.keys(obj)
	    , key;

	  for (var i = 0, len = keys.length; i < len; ++i) {
	    key = keys[i];
	    ret.push(stringify(obj[key], prefix
	      ? prefix + '[' + encodeURIComponent(key) + ']'
	      : encodeURIComponent(key)));
	  }

	  return ret.join('&');
	}

	/**
	 * Set `obj`'s `key` to `val` respecting
	 * the weird and wonderful syntax of a qs,
	 * where "foo=bar&foo=baz" becomes an array.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {String} val
	 * @api private
	 */

	function set(obj, key, val) {
	  var v = obj[key];
	  if (undefined === v) {
	    obj[key] = val;
	  } else if (Array.isArray(v)) {
	    v.push(val);
	  } else {
	    obj[key] = [v, val];
	  }
	}

	/**
	 * Locate last brace in `str` within the key.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function lastBraceInKey(str) {
	  var len = str.length
	    , brace
	    , c;
	  for (var i = 0; i < len; ++i) {
	    c = str[i];
	    if (']' == c) brace = false;
	    if ('[' == c) brace = true;
	    if ('=' == c && !brace) return i;
	  }
	}


/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = '192.168.0.102';

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @Author   : walid
	 * @Data     : 2017-03-20  18:32
	 * @Describe : 封装weex实例对象
	 */

	function isIOS() {
	  return weex.config.env ? weex.config.env.platform === 'iOS' : false;
	}

	function isWeb() {
	  return weex.config.platform === 'Web';
	}

	function getDeviceInfo() {
	  var env = weex.config.env;
	  var deviceWidth = env.deviceWidth;
	  var deviceHeight = env.deviceHeight;
	  return {
	    deviceWidth: deviceWidth,
	    deviceHeight: deviceHeight
	  };
	}

	exports.default = {
	  isIOS: isIOS, isWeb: isWeb, getDeviceInfo: getDeviceInfo
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @author walid
	 * @date 2017/3/4
	 * @description weex modal 工具类
	 */

	var modal = weex.requireModule('modal');

	function toast(_ref) {
	  var message = _ref.message,
	      duration = _ref.duration;

	  return new Promise(function (resolve, reject) {
	    if (!message) {
	      reject('message is invalue !!!');
	      return;
	    }
	    modal.toast({
	      message: message,
	      duration: duration || 2.0
	    });
	    resolve();
	  });
	}

	function alert(_ref2) {
	  var message = _ref2.message,
	      _ref2$okTitle = _ref2.okTitle,
	      okTitle = _ref2$okTitle === undefined ? '确定' : _ref2$okTitle;

	  return new Promise(function (resolve, reject) {
	    if (!message) {
	      reject('message is invalue !!!');
	      return;
	    }
	    modal.alert({
	      message: message, okTitle: okTitle
	    }, function (res) {
	      console.log('alert callback', res);
	      resolve(res);
	    });
	  });
	}

	function confirm(_ref3) {
	  var message = _ref3.message,
	      _ref3$okTitle = _ref3.okTitle,
	      okTitle = _ref3$okTitle === undefined ? '确定' : _ref3$okTitle,
	      _ref3$cancelTitle = _ref3.cancelTitle,
	      cancelTitle = _ref3$cancelTitle === undefined ? '取消' : _ref3$cancelTitle;

	  return new Promise(function (resolve, reject) {
	    if (!message) {
	      reject('message is invalue !!!');
	      return;
	    }
	    modal.confirm({
	      message: message, okTitle: okTitle, cancelTitle: cancelTitle
	    }, function (res) {
	      res === okTitle ? resolve(res) : reject(res);
	      console.log('confirm callback', res);
	    });
	  });
	}

	function prompt(_ref4) {
	  var message = _ref4.message,
	      _ref4$okTitle = _ref4.okTitle,
	      okTitle = _ref4$okTitle === undefined ? '确定' : _ref4$okTitle,
	      _ref4$cancelTitle = _ref4.cancelTitle,
	      cancelTitle = _ref4$cancelTitle === undefined ? '取消' : _ref4$cancelTitle;

	  return new Promise(function (resolve, reject) {
	    if (!message) {
	      reject('message is invalue !!!');
	      return;
	    }
	    modal.prompt({
	      message: message, okTitle: okTitle, cancelTitle: cancelTitle
	    }, function (value) {
	      res === okTitle ? resolve(res) : reject(res);
	      console.log('confirm callback', value);
	    });
	  });
	}

	exports.default = {
	  toast: toast, alert: alert, confirm: confirm, prompt: prompt
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @author walid
	 * @date 2017/03/30
	 * @description 图片常量定义
	 */

	var baseUrl = 'https://github.com/SyswinAE/assets/blob/master/toon/';
	var suffix = '?raw=true';

	var collect = {
	  video: baseUrl + 'collect/ic-video.png' + suffix,
	  audio: baseUrl + 'collect/ic-audio.png' + suffix,
	  location: baseUrl + 'collect/ic-location.png' + suffix,
	  playBule: baseUrl + 'collect/ic-play-bule.png' + suffix,
	  playBlack: baseUrl + 'collect/ic-play-black.png' + suffix
	};

	exports.default = {
	  collect: collect
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["root"]
	  }, [_c('div', {
	    staticClass: ["div-header"]
	  }, [_c('image', {
	    staticClass: ["img-top"],
	    attrs: {
	      "src": "https://github.com/osmartian/weex-frame/blob/master/src/views/launch/imgs/ic-top.png?raw=true"
	    }
	  }), _c('div', {
	    staticClass: ["div-content"]
	  }, [_c('text', {
	    staticClass: ["p-title"]
	  }, [_vm._v("为梦想发起筹款"), _c('br'), _vm._v("让生活更多可能")], 1), _c('text', {
	    staticClass: ["p-description"]
	  }, [_vm._v("想为村民修条路！想建个流浪狗之家！想拍个小视频！")]), _c('text', {
	    staticClass: ["btn-action"],
	    on: {
	      "click": _vm.toLaunch
	    }
	  }, [_vm._v("立即发起筹款")])])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(21)
	)

	/* script */
	__vue_exports__ = __webpack_require__(22)

	/* template */
	var __vue_template__ = __webpack_require__(23)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/wangwei/WorkSpace/weex-frame/src/views/mine/app.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-b2809834"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = {
	  "mine-root": {
	    "width": 750,
	    "height": 1334
	  },
	  "img-bg-mine": {
	    "width": 750,
	    "height": 1334
	  },
	  "div-content": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "width": 750,
	    "height": 1334,
	    "flexDirection": "column"
	  },
	  "div-top-link": {
	    "width": 750,
	    "height": 320,
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "padding": 30
	  },
	  "div-card": {
	    "flexDirection": "row",
	    "justifyContent": "flex-start"
	  },
	  "p-card": {
	    "color": "#ffffff",
	    "marginRight": 5,
	    "fontSize": 24,
	    "fontWeight": "300"
	  },
	  "img-triangle": {
	    "width": 40,
	    "height": 50,
	    "marginTop": -8
	  },
	  "p-person-center": {
	    "color": "#ffffff",
	    "fontSize": 24,
	    "fontWeight": "300"
	  },
	  "div-work-content": {
	    "flex": 1,
	    "backgroundColor": "#eeeeee"
	  },
	  "img-person": {
	    "width": 150,
	    "height": 150,
	    "position": "absolute",
	    "left": 300,
	    "top": 210
	  },
	  "div-person-info": {
	    "width": 750,
	    "backgroundColor": "#ffffff",
	    "paddingTop": 60,
	    "paddingBottom": 20
	  },
	  "div-person-info-top": {
	    "flexDirection": "row",
	    "justifyContent": "center"
	  },
	  "p-person-name": {
	    "marginRight": 10,
	    "fontWeight": "700",
	    "fontSize": 32
	  },
	  "p-work-position": {
	    "fontWeight": "800",
	    "fontSize": 28
	  },
	  "p-work-department": {
	    "textAlign": "center",
	    "marginTop": 12,
	    "fontSize": 26,
	    "color": "#666666"
	  },
	  "div-person-list": {
	    "backgroundColor": "#ffffff",
	    "width": 750,
	    "justifyContent": "space-between",
	    "flexDirection": "row",
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#dddddd",
	    "borderBottomStyle": "solid",
	    "paddingTop": 20,
	    "paddingRight": 50,
	    "paddingLeft": 50
	  },
	  "div-list-item": {
	    "alignItems": "center"
	  },
	  "img-item": {
	    "width": 50,
	    "height": 50
	  },
	  "p-item": {
	    "marginTop": 12,
	    "marginBottom": 20,
	    "fontSize": 24
	  },
	  "div-group-list": {
	    "backgroundColor": "#ffffff",
	    "width": 750,
	    "flexDirection": "row",
	    "paddingTop": 20
	  },
	  "div-add-list": {
	    "backgroundColor": "#ffffff",
	    "width": 750,
	    "flexDirection": "row",
	    "paddingTop": 20,
	    "marginTop": 24
	  },
	  "div-group-item": {
	    "width": 188
	  },
	  "img-add-item": {
	    "width": 36,
	    "height": 36
	  }
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mixins = __webpack_require__(11);

	var _mixins2 = _interopRequireDefault(_mixins);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  mixins: [_mixins2.default],

	  data: function data() {
	    return {
	      personName: '张小凡',
	      workPosition: 'web前端工程师',
	      workDepartment: '思源总部/互联集团/应用引擎部',
	      personInfoList: [{
	        iconUrl: 'https://gitlab.com/toonteam/weex/raw/f9492284d15c3d9ec79b72608768d20cf450cae9/src/views/mine/imgs/workbench_friends.png',
	        name: '个人动态'
	      }, {
	        iconUrl: 'https://gitlab.com/toonteam/weex/raw/f9492284d15c3d9ec79b72608768d20cf450cae9/src/views/mine/imgs/person-data.png',
	        name: '个人资料'
	      }, {
	        iconUrl: 'https://gitlab.com/toonteam/weex/raw/f9492284d15c3d9ec79b72608768d20cf450cae9/src/views/mine/imgs/workbench_card_setting.png',
	        name: '名片设置'
	      }],
	      groupInfoList: [{
	        iconUrl: 'https://gitlab.com/toonteam/weex/raw/f9492284d15c3d9ec79b72608768d20cf450cae9/src/views/mine/imgs/wallet_trade_data.png',
	        name: '我的公司'
	      }, {
	        iconUrl: 'https://gitlab.com/toonteam/weex/raw/f9492284d15c3d9ec79b72608768d20cf450cae9/src/views/mine/imgs/group_icon.png',
	        name: '群组'
	      }, {
	        iconUrl: 'https://gitlab.com/toonteam/weex/raw/f9492284d15c3d9ec79b72608768d20cf450cae9/src/views/mine/imgs/person-dynamic.png',
	        name: '审批'
	      }]
	    };
	  },


	  methods: {
	    onPersonList: function onPersonList(index) {
	      switch (index) {
	        case 1:
	          this.push({
	            route: this.route.userInfo
	          });
	          break;
	        case 2:
	          break;
	        default:
	          this.push({
	            route: this.route.collect
	          });
	          break;
	      }
	    },
	    toPersonal: function toPersonal(event) {
	      this.push({
	        route: this.route.personal
	      });
	    },
	    toBlog: function toBlog(event) {
	      this.push({
	        route: this.route.web,
	        query: {
	          url: 'http://www.jianshu.com/u/a279a2f8ed63'
	        }
	      });
	      //        this.navigator.pushWeb('http://www.jianshu.com/u/a279a2f8ed63')
	    }
	  }
	}; //
	//
	//
	//

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('osc-root', {
	    staticClass: ["mine-root"]
	  }, [_c('image', {
	    staticClass: ["img-bg-mine"],
	    attrs: {
	      "resize": "cover",
	      "src": "https://gitlab.com/toonteam/weex/raw/ce0c5f60531f1a0d676dedfa1f81c7e67e3151ed/src/views/mine/imgs/bg_basic_info_default.png"
	    }
	  }), _c('div', {
	    staticClass: ["div-content"]
	  }, [_c('div', {
	    staticClass: ["div-top-link"]
	  }, [_c('div', {
	    staticClass: ["div-card"]
	  }, [_c('text', {
	    staticClass: ["p-card"]
	  }, [_vm._v("名片")]), _c('image', {
	    staticClass: ["img-triangle"],
	    attrs: {
	      "src": "https://gitlab.com/toonteam/weex/raw/f9492284d15c3d9ec79b72608768d20cf450cae9/src/views/mine/imgs/triangle.png"
	    }
	  })]), _c('text', {
	    staticClass: ["p-person-center"],
	    on: {
	      "click": _vm.toPersonal
	    }
	  }, [_vm._v("个人中心")])]), _c('div', {
	    staticClass: ["div-work-content"]
	  }, [_c('div', {
	    staticClass: ["div-person-info"]
	  }, [_c('div', {
	    staticClass: ["div-person-info-top"]
	  }, [_c('text', {
	    staticClass: ["p-person-name"]
	  }, [_vm._v(_vm._s(_vm.personName))]), _c('text', {
	    staticClass: ["p-work-position"]
	  }, [_vm._v(_vm._s(_vm.workPosition))])]), _c('text', {
	    staticClass: ["p-work-department"]
	  }, [_vm._v(_vm._s(_vm.workDepartment))])]), _c('div', {
	    staticClass: ["div-person-list"]
	  }, _vm._l((_vm.personInfoList), function(item, index) {
	    return _c('div', {
	      staticClass: ["div-list-item"],
	      on: {
	        "click": function($event) {
	          _vm.onPersonList(index)
	        }
	      }
	    }, [_c('image', {
	      staticClass: ["img-item"],
	      attrs: {
	        "src": item.iconUrl
	      }
	    }), _c('text', {
	      staticClass: ["p-item"]
	    }, [_vm._v(_vm._s(item.name))])])
	  })), _c('div', {
	    staticClass: ["div-group-list"]
	  }, _vm._l((_vm.groupInfoList), function(item) {
	    return _c('div', {
	      staticClass: ["div-list-item", "div-group-item"]
	    }, [_c('image', {
	      staticClass: ["img-item"],
	      attrs: {
	        "src": item.iconUrl
	      }
	    }), _c('text', {
	      staticClass: ["p-item"]
	    }, [_vm._v(_vm._s(item.name))])])
	  })), _c('div', {
	    staticClass: ["div-add-list"]
	  }, [_c('div', {
	    staticClass: ["div-list-item", "div-group-item"],
	    on: {
	      "click": _vm.toBlog
	    }
	  }, [_c('image', {
	    staticClass: ["img-add-item"],
	    attrs: {
	      "src": "https://gitlab.com/toonteam/weex/raw/283827bfcf4aac59021a2c4c0572e27b98546627/src/views/mine/imgs/apply-blog.png"
	    }
	  }), _c('text', {
	    staticClass: ["p-item"]
	  }, [_vm._v("博客")])]), _c('div', {
	    staticClass: ["div-list-item", "div-group-item"]
	  }, [_c('image', {
	    staticClass: ["img-add-item"],
	    attrs: {
	      "src": "https://gitlab.com/toonteam/weex/raw/f9492284d15c3d9ec79b72608768d20cf450cae9/src/views/mine/imgs/beacon_add_key.png"
	    }
	  }), _c('text', {
	    staticClass: ["p-item"]
	  }, [_vm._v("添加")])])])])]), _c('image', {
	    staticClass: ["img-person"],
	    attrs: {
	      "src": "https://gitlab.com/toonteam/weex/raw/44cab38bc97860112d963001ba9c9179c0365ee5/src/views/mine/imgs/person-img.jpg"
	    }
	  })])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(25)
	)

	/* script */
	__vue_exports__ = __webpack_require__(26)

	/* template */
	var __vue_template__ = __webpack_require__(28)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/wangwei/WorkSpace/weex-frame/src/views/web/app.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-7f999416"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = {
	  "web": {
	    "width": 750,
	    "height": 1334,
	    "backgroundColor": "#f8f8f8"
	  }
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _string = __webpack_require__(27);

	var _navigator = __webpack_require__(12);

	var _navigator2 = _interopRequireDefault(_navigator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//

	var webview = weex.requireModule('webview');

	exports.default = {
	  data: function data() {
	    return {
	      title: 'OsMartian - WebView',
	      canGoBack: false,
	      url: (0, _string.getQueryStringByName)('url') || 'https://weex-project.io/cn/'
	    };
	  },


	  methods: {
	    onReload: function onReload(event) {
	      webview.reload(this.$refs.webview);
	    },
	    onBack: function onBack() {
	      this.canGoBack ? webview.goBack(this.$refs.webview) : _navigator2.default.pop();
	    },
	    start: function start(event) {
	      console.log('pagestart', event);
	    },
	    finish: function finish(event) {
	      console.log('event', event);
	      this.canGoBack = event.canGoBack;
	      this.title = event.title || 'OsMartian - WebView';
	    }
	  }
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.trim = trim;
	exports.urlEncode = urlEncode;
	exports.getQueryString = getQueryString;
	exports.getQueryStringByName = getQueryStringByName;
	exports.getQueryStringByIndex = getQueryStringByIndex;
	/**
	 * @author walid
	 * @date 2017/02/21
	 * @description 字符串操作
	 */

	/* eslint linebreak-style: [0] */
	function trim(str, isGlobal) {
	  var result = str.replace(/(^\s+)|(\s+$)/g, '');
	  if (isGlobal) {
	    result = result.replace(/\s/g, '');
	  }
	  return result;
	}

	/**
	 * param 将要转为URL参数字符串的对象
	 * key URL参数字符串的前缀
	 * encode true/false 是否进行URL编码,默认为true
	 *
	 * return URL参数字符串
	 */
	function urlEncode(param, key, encode) {
	  if (param == null) {
	    return '';
	  }
	  var paramStr = '';
	  var t = typeof param === 'undefined' ? 'undefined' : _typeof(param);
	  if (t == 'string' || t == 'number' || t == 'boolean') {
	    paramStr += '&' + key + '=' + (encode == null || encode ? encodeURIComponent(param) : param);
	  } else {
	    for (var i in param) {
	      var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
	      paramStr += urlEncode(param[i], k, encode);
	    }
	  }
	  return paramStr;
	}

	/**
	 * 获取QueryString的数组
	 * @returns {Array|{index: number, input: string}}
	 */
	function getQueryString() {
	  var result = weex.config.bundleUrl.match(new RegExp('[\?\&][^\?\&]+=[^\?\&]+', 'g'));
	  for (var i = 0; i < result.length; i++) {
	    result[i] = result[i].substring(1);
	  }
	  return result;
	}

	/**
	 * 根据QueryString参数名称获取值
	 * @param name
	 * @returns {string}
	 */
	function getQueryStringByName(name) {
	  name = name.replace(/[\[\]]/g, '\\$&');
	  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
	  var results = regex.exec(weex.config.bundleUrl);
	  if (!results || !results[2]) {
	    console.log('empty');
	    return '';
	  }
	  console.log(name, decodeURIComponent(results[2].replace(/\+/g, ' ')));
	  return decodeURIComponent(results[2].replace(/\+/g, ' '));
	}

	/**
	 * 根据QueryString参数索引获取值
	 * @param index
	 * @returns {*}
	 */
	function getQueryStringByIndex(index) {
	  if (!index) {
	    return '';
	  }
	  var queryStringList = getQueryString();
	  if (index >= queryStringList.length) {
	    return '';
	  }
	  var result = queryStringList[index];
	  var startIndex = result.indexOf('=') + 1;
	  return result.substring(startIndex);
	}

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('osc-navpage', {
	    attrs: {
	      "title": _vm.title,
	      "leftItemSrc": "https://gitlab.com/toonteam/weex/raw/ce656f79084ed9db357f8abd76c6e6c82dc5a28d/src/views/person-info/imgs/back.png",
	      "rightItemSrc": "http://gtms02.alicdn.com/tps/i2/TB1ED7iMpXXXXXEXXXXWA_BHXXX-48-48.png"
	    },
	    on: {
	      "naviBarLeftItemClick": _vm.onBack,
	      "naviBarRightItemClick": _vm.onReload
	    }
	  }, [_c('web', {
	    ref: "webview",
	    staticClass: ["web"],
	    attrs: {
	      "src": _vm.url
	    },
	    on: {
	      "pagestart": _vm.start,
	      "pagefinish": _vm.finish
	    }
	  })], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(30)
	)

	/* script */
	__vue_exports__ = __webpack_require__(31)

	/* template */
	var __vue_template__ = __webpack_require__(32)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/wangwei/WorkSpace/weex-frame/src/views/userinfo/app.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-0935200c"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = {
	  "root": {
	    "backgroundColor": "#eeeeee"
	  },
	  "div-main-info": {
	    "backgroundColor": "#ffffff",
	    "paddingTop": 20,
	    "paddingLeft": 20
	  },
	  "div-main-info-content": {
	    "flexDirection": "row",
	    "paddingBottom": 10,
	    "paddingRight": 15,
	    "borderBottomStyle": "solid",
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#cccccc"
	  },
	  "img-person": {
	    "width": 130,
	    "height": 130,
	    "marginRight": 30
	  },
	  "div-main-word": {
	    "justifyContent": "center"
	  },
	  "div-person-job": {
	    "flexDirection": "row",
	    "alignItems": "center"
	  },
	  "p-person-name": {
	    "marginRight": 15,
	    "fontSize": 32,
	    "color": "#000000"
	  },
	  "p-work-position": {
	    "fontSize": 32,
	    "color": "#000000"
	  },
	  "p-work-department": {
	    "color": "#666666",
	    "fontSize": 28
	  },
	  "div-qr-code-name": {
	    "color": "#666666",
	    "fontSize": 28
	  },
	  "p-social-word": {
	    "color": "#666666",
	    "fontSize": 28,
	    "paddingTop": 20,
	    "paddingLeft": 20,
	    "paddingBottom": 12
	  },
	  "p-list-name": {
	    "color": "#666666",
	    "fontSize": 28,
	    "alignSelf": "center",
	    "width": 180
	  },
	  "div-qr-code": {
	    "backgroundColor": "#ffffff",
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "borderBottomStyle": "solid",
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#cccccc",
	    "paddingTop": 15,
	    "paddingLeft": 20,
	    "paddingBottom": 15,
	    "paddingRight": 20
	  },
	  "img-qr-code-icon": {
	    "width": 28,
	    "height": 28,
	    "alignSelf": "center"
	  },
	  "cell-list-item": {
	    "flexDirection": "row",
	    "backgroundColor": "#ffffff",
	    "paddingTop": 15,
	    "paddingBottom": 15,
	    "paddingLeft": 30,
	    "borderBottomStyle": "solid",
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#cccccc",
	    "borderTopStyle": "solid",
	    "borderTopWidth": 1,
	    "borderTopColor": "#cccccc",
	    "marginBottom": 20
	  },
	  "list": {
	    "backgroundColor": "#eeeeee"
	  },
	  "weex-list-inner": {
	    "backgroundColor": "#eeeeee"
	  }
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _navigator = __webpack_require__(12);

	var _navigator2 = _interopRequireDefault(_navigator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    return {
	      title: '个人资料',
	      personName: '张小凡',
	      workPosition: 'web前端工程师',
	      workDepartment: '思源总部/互联集团/应用引擎部',
	      socialInfo: [{
	        tag: '位置',
	        data: '实时位置'
	      }, {
	        tag: '名片号',
	        data: 's253585'
	      }]
	    };
	  },

	  methods: {
	    naviBarLeftItemClick: function naviBarLeftItemClick() {
	      _navigator2.default.pop();
	    }
	  }
	}; //
	//
	//
	//

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('osc-navpage', {
	    staticClass: ["root"],
	    attrs: {
	      "title": _vm.title,
	      "titleColor": "white",
	      "leftItemSrc": "https://gitlab.com/toonteam/weex/raw/ce656f79084ed9db357f8abd76c6e6c82dc5a28d/src/views/person-info/imgs/back.png"
	    },
	    on: {
	      "naviBarLeftItemClick": _vm.naviBarLeftItemClick
	    }
	  }, [_c('div', {
	    staticClass: ["div-main-info"]
	  }, [_c('div', {
	    staticClass: ["div-main-info-content"]
	  }, [_c('image', {
	    staticClass: ["img-person"],
	    attrs: {
	      "src": "https://gitlab.com/toonteam/weex/raw/44cab38bc97860112d963001ba9c9179c0365ee5/src/views/mine/imgs/person-img.jpg"
	    }
	  }), _c('div', {
	    staticClass: ["div-main-word"]
	  }, [_c('div', {
	    staticClass: ["div-person-job"]
	  }, [_c('text', {
	    staticClass: ["p-person-name"]
	  }, [_vm._v(_vm._s(_vm.personName))]), _c('text', {
	    staticClass: ["p-work-position"]
	  }, [_vm._v(_vm._s(_vm.workPosition))])]), _c('text', {
	    staticClass: ["p-work-department"]
	  }, [_vm._v(_vm._s(_vm.workDepartment))])])])]), _c('div', {
	    staticClass: ["div-qr-code"]
	  }, [_c('text', {
	    staticClass: ["div-qr-code-name"]
	  }, [_vm._v("二维码")]), _c('image', {
	    staticClass: ["img-qr-code-icon"],
	    attrs: {
	      "src": "https://gitlab.com/toonteam/weex/raw/c165921d7852798ac887d7d9a37d60daacef0f06/src/views/person-info/imgs/move_btn.png"
	    }
	  })]), _c('div', {
	    staticClass: ["div-social-info"]
	  }, [_c('text', {
	    staticClass: ["p-social-word"]
	  }, [_vm._v("社交信息")]), _c('div', {
	    staticClass: ["list"]
	  }, _vm._l((_vm.socialInfo), function(item) {
	    return _c('div', {
	      key: item.name,
	      staticClass: ["cell-list-item"]
	    }, [_c('text', {
	      staticClass: ["p-list-name"]
	    }, [_vm._v(_vm._s(item.tag))]), _c('text', {
	      staticClass: ["p-list-content"]
	    }, [_vm._v(_vm._s(item.data))])])
	  }))]), _vm._l((_vm.scrollList), function(item) {
	    return _c('text', {
	      staticClass: ["scroller-item"]
	    }, [_vm._v("scroller" + _vm._s(item))])
	  })], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(34)
	)

	/* script */
	__vue_exports__ = __webpack_require__(35)

	/* template */
	var __vue_template__ = __webpack_require__(36)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/wangwei/WorkSpace/weex-frame/src/views/personal/app.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-6be0c75a"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = {
	  "div-scroller": {
	    "width": 750,
	    "position": "absolute",
	    "bottom": 0,
	    "top": 0
	  },
	  "div-scroll-inner": {
	    "backgroundColor": "#eff3f2",
	    "bottom": 0
	  },
	  "mine-personal-div": {
	    "position": "relative",
	    "height": 110,
	    "paddingTop": 30,
	    "backgroundColor": "#ffffff"
	  },
	  "mine-personal-img": {
	    "position": "absolute",
	    "left": 35,
	    "width": 52,
	    "height": 52
	  },
	  "mine-personal-text": {
	    "position": "absolute",
	    "left": 115,
	    "marginTop": 4,
	    "fontSize": 30
	  },
	  "mine-personal-go": {
	    "position": "absolute",
	    "right": 25,
	    "top": 35,
	    "width": 15,
	    "height": 24
	  },
	  "personal-logOut-wrap": {
	    "height": 100,
	    "marginTop": 30,
	    "marginBottom": 40,
	    "lineHeight": 80,
	    "backgroundColor": "#ffffff",
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "personal-logOut-text": {
	    "color": "#FF0000",
	    "fontSize": 32
	  }
	}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _navigator = __webpack_require__(12);

	var _navigator2 = _interopRequireDefault(_navigator);

	var _route = __webpack_require__(3);

	var _route2 = _interopRequireDefault(_route);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//

	exports.default = {
	  data: function data() {
	    return {
	      funcList: [{
	        iconUrl: 'https://gitlab.com/toonteam/weex/raw/dev/src/views/personal/imgs/icon_my_company.png',
	        name: '公司管理',
	        attr: {
	          marginTop: '17px',
	          marginBottom: '',
	          borderTopWidth: '1px',
	          borderBottomWidth: '1px',
	          borderLeftWidth: '0',
	          borderRightWidth: '0',
	          borderColor: '#dfe3e2',
	          borderStyle: 'solid'
	        }
	      }, {
	        iconUrl: 'https://gitlab.com/toonteam/weex/raw/dev/src/views/personal/imgs/icon_my_wallet.png',
	        name: '钱包',
	        attr: {
	          marginTop: '17px',
	          marginBottom: '',
	          borderTopWidth: '1px',
	          borderBottomWidth: '1px',
	          borderLeftWidth: '0',
	          borderRightWidth: '0',
	          borderColor: '#dfe3e2',
	          borderStyle: 'solid'
	        }
	      }, {
	        iconUrl: 'https://gitlab.com/toonteam/weex/raw/dev/src/views/personal/imgs/icon_my_collection.png',
	        name: '收藏',
	        attr: {
	          marginTop: '',
	          marginBottom: '17px',
	          borderTopWidth: '0',
	          borderBottomWidth: '1px',
	          borderLeftWidth: '0',
	          borderRightWidth: '0',
	          borderColor: '#dfe3e2',
	          borderStyle: 'solid'
	        }
	      }, {
	        iconUrl: 'https://gitlab.com/toonteam/weex/raw/dev/src/views/personal/imgs/icon_my_door_guard.png',
	        name: '门禁',
	        attr: {
	          marginTop: '',
	          marginBottom: '',
	          borderTopWidth: '1px',
	          borderBottomWidth: '1px',
	          borderLeftWidth: '0',
	          borderRightWidth: '0',
	          borderColor: '#dfe3e2',
	          borderStyle: 'solid'
	        }
	      }, {
	        iconUrl: 'https://gitlab.com/toonteam/weex/raw/dev/src/views/personal/imgs/icon_my_beacon.png',
	        name: '闪通',
	        attr: {
	          marginTop: '',
	          marginBottom: '17px',
	          borderTopWidth: '0',
	          borderBottomWidth: '1px',
	          borderLeftWidth: '0',
	          borderRightWidth: '0',
	          borderColor: '#dfe3e2',
	          borderStyle: 'solid'
	        }
	      }, {
	        iconUrl: 'https://gitlab.com/toonteam/weex/raw/dev/src/views/personal/imgs/icon_my_skin.png',
	        name: '更换皮肤',
	        attr: {
	          marginTop: '',
	          marginBottom: '',
	          borderTopWidth: '1px',
	          borderBottomWidth: '0',
	          borderLeftWidth: '0',
	          borderRightWidth: '0',
	          borderColor: '#dfe3e2',
	          borderStyle: 'solid'
	        }
	      }, {
	        iconUrl: 'https://gitlab.com/toonteam/weex/raw/dev/src/views/personal/imgs/icon_my_consult.png',
	        name: '常用信息管理',
	        attr: {
	          marginTop: '',
	          marginBottom: '',
	          borderTopWidth: '1px',
	          borderBottomWidth: '0',
	          borderLeftWidth: '0',
	          borderRightWidth: '0',
	          borderColor: '#dfe3e2',
	          borderStyle: 'solid'
	        }
	      }, {
	        iconUrl: 'https://gitlab.com/toonteam/weex/raw/dev/src/views/personal/imgs/icon_my_address.png',
	        name: '常用地址管理',
	        attr: {
	          marginTop: '',
	          marginBottom: '',
	          borderTopWidth: '1px',
	          borderBottomWidth: '0',
	          borderLeftWidth: '0',
	          borderRightWidth: '0',
	          borderColor: '#dfe3e2',
	          borderStyle: 'solid'
	        }
	      }, {
	        iconUrl: 'https://gitlab.com/toonteam/weex/raw/dev/src/views/personal/imgs/icon_my_feedback.png',
	        name: '帮助与反馈',
	        attr: {
	          marginTop: '',
	          marginBottom: '',
	          borderTopWidth: '1px',
	          borderBottomWidth: '1px',
	          borderLeftWidth: '0',
	          borderRightWidth: '0',
	          borderColor: '#dfe3e2',
	          borderStyle: 'solid'
	        }
	      }, {
	        iconUrl: 'https://gitlab.com/toonteam/weex/raw/dev/src/views/personal/imgs/icon_my_account.png',
	        name: '账户设置',
	        attr: {
	          marginTop: '17px',
	          marginBottom: '17px',
	          borderTopWidth: '1px',
	          borderBottomWidth: '1px',
	          borderLeftWidth: '0',
	          borderRightWidth: '0',
	          borderColor: '#dfe3e2',
	          borderStyle: 'solid'
	        }
	      }, {
	        iconUrl: 'https://gitlab.com/toonteam/weex/raw/dev/src/views/personal/imgs/icon_my_common.png',
	        name: '通用设置',
	        attr: {
	          marginTop: '',
	          marginBottom: '',
	          borderTopWidth: '1px',
	          borderBottomWidth: '1px',
	          borderLeftWidth: '0',
	          borderRightWidth: '0',
	          borderColor: '#dfe3e2',
	          borderStyle: 'solid'
	        }
	      }],
	      goIconUrl: 'https://gitlab.com/toonteam/weex/raw/dev/src/views/personal/imgs/jump_arrow_next.png'
	    };
	  },

	  methods: {
	    toMine: function toMine(event) {
	      _navigator2.default.push(_route2.default.mine);
	    },
	    naviBarLeftItemClick: function naviBarLeftItemClick() {
	      _navigator2.default.pop();
	    }
	  }
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('osc-navpage', {
	    staticClass: ["personal-root"],
	    attrs: {
	      "title": "个人中心",
	      "height": "100",
	      "titleColor": "#000",
	      "backgroundColor": "#eff3f2",
	      "leftItemSrc": "https://gitlab.com/toonteam/weex/raw/dev/src/views/personal/imgs/common_goback.png"
	    },
	    on: {
	      "naviBarLeftItemClick": _vm.naviBarLeftItemClick
	    }
	  }, [_c('scroller', {
	    staticClass: ["div-scroller"]
	  }, [_c('div', {
	    staticClass: ["div-scroll-inner"]
	  }, [_vm._l((_vm.funcList), function(item, index) {
	    return _c('div', {
	      staticClass: ["cell"]
	    }, [_c('div', {
	      staticClass: ["mine-personal-div"],
	      style: item.attr
	    }, [_c('image', {
	      staticClass: ["mine-personal-img"],
	      attrs: {
	        "src": item.iconUrl
	      }
	    }), _c('text', {
	      staticClass: ["mine-personal-text"]
	    }, [_vm._v(_vm._s(item.name))]), _c('image', {
	      staticClass: ["mine-personal-go"],
	      attrs: {
	        "src": _vm.goIconUrl
	      }
	    })])])
	  }), _c('div', {
	    staticClass: ["personal-logOut-wrap"]
	  }, [_c('text', {
	    staticClass: ["personal-logOut-text"]
	  }, [_vm._v("退出登录")])])], 2)])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(38)
	)

	/* script */
	__vue_exports__ = __webpack_require__(39)

	/* template */
	var __vue_template__ = __webpack_require__(40)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/wangwei/WorkSpace/weex-frame/src/views/list/app.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-147fc531"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = {
	  "list": {
	    "height": 850
	  },
	  "row": {
	    "width": 750
	  },
	  "item": {
	    "justifyContent": "center",
	    "borderBottomWidth": 2,
	    "borderBottomColor": "#c0c0c0",
	    "height": 100,
	    "padding": 20
	  }
	}

/***/ },
/* 39 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  props: {
	    rows: {
	      default: function _default() {
	        return [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }, { id: 13 }, { id: 14 }, { id: 15 }, { id: 16 }, { id: 17 }, { id: 18 }, { id: 19 }, { id: 20 }, { id: 21 }, { id: 22 }, { id: 23 }, { id: 24 }, { id: 25 }, { id: 26 }, { id: 27 }, { id: 28 }, { id: 29 }];
	      }
	    },
	    moreRows: {
	      default: function _default() {
	        return [{ id: 30 }, { id: 31 }, { id: 32 }, { id: 33 }];
	      }
	    }
	  },

	  methods: {
	    onRefresh: function onRefresh(e) {
	      var _this = this;

	      console.log('onRefresh');
	      setTimeout(function () {
	        _this.$refs.list.$emit('refreshDone');
	      }, 2000);
	    },
	    onLoading: function onLoading() {
	      var _this2 = this;

	      console.log('onLoading');
	      if (this.rows.length <= 33) {
	        this.rows.push(this.moreRows[this.rows.length - 29]);
	        setTimeout(function () {
	          _this2.$refs.list.$emit('loadingDone');
	        }, 2000);
	      }
	    }
	  }
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('osc-list', {
	    ref: "list",
	    staticClass: ["list"],
	    on: {
	      "refresh": _vm.onRefresh,
	      "loading": _vm.onLoading
	    }
	  }, _vm._l((_vm.rows), function(i, row) {
	    return _c('cell', {
	      staticClass: ["row"],
	      appendAsTree: true,
	      attrs: {
	        "index": i,
	        "append": "tree"
	      }
	    }, [_c('div', {
	      staticClass: ["item"]
	    }, [_c('text', {
	      staticClass: ["item-title"]
	    }, [_vm._v("row " + _vm._s(row.id))])])])
	  }))], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(42)
	)

	/* script */
	__vue_exports__ = __webpack_require__(43)

	/* template */
	var __vue_template__ = __webpack_require__(44)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/wangwei/WorkSpace/weex-frame/src/views/scroller/app.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-0ae4504d"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = {
	  "list": {
	    "width": 750,
	    "height": 1334
	  }
	}

/***/ },
/* 43 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  methods: {
	    onRefresh: function onRefresh(e) {
	      var _this = this;

	      console.log('onRefresh');
	      setTimeout(function () {
	        _this.$refs.list.$emit('refreshDone');
	      }, 2000);
	    },
	    onLoading: function onLoading() {
	      var _this2 = this;

	      console.log('onLoading');
	      setTimeout(function () {
	        _this2.$refs.list.$emit('loadingDone');
	      }, 2000);
	    }
	  }
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('osc-scroller', {
	    ref: "list",
	    staticClass: ["list"],
	    on: {
	      "refresh": _vm.onRefresh,
	      "loading": _vm.onLoading
	    }
	  }, [_c('text', {
	    staticClass: ["count"]
	  }, [_vm._v("Appear items")]), _c('text', {
	    staticClass: ["count"]
	  }, [_vm._v("Appear items")]), _c('text', {
	    staticClass: ["count"]
	  }, [_vm._v("Appear items")]), _c('text', {
	    staticClass: ["count"]
	  }, [_vm._v("Appear items")]), _c('text', {
	    staticClass: ["count"]
	  }, [_vm._v("Appear items")]), _c('text', {
	    staticClass: ["count"]
	  }, [_vm._v("Appear items")]), _c('text', {
	    staticClass: ["count"]
	  }, [_vm._v("Appear items")]), _c('text', {
	    staticClass: ["count"]
	  }, [_vm._v("Appear items")]), _c('text', {
	    staticClass: ["count"]
	  }, [_vm._v("Appear items")]), _c('text', {
	    staticClass: ["count"]
	  }, [_vm._v("Appear items")]), _c('text', {
	    staticClass: ["count"]
	  }, [_vm._v("Appear items")]), _c('text', {
	    staticClass: ["count"]
	  }, [_vm._v("Appear items")])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 45 */,
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(47)
	)

	/* script */
	__vue_exports__ = __webpack_require__(48)

	/* template */
	var __vue_template__ = __webpack_require__(49)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/wangwei/WorkSpace/weex-frame/src/components/osc-root.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-53745179"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = {
	  "root": {
	    "width": 750,
	    "height": 1334,
	    "display": "flex",
	    "flexDirection": "column"
	  },
	  "wrapper": {
	    "width": 750
	  }
	}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _instance = __webpack_require__(16);

	var _instance2 = _interopRequireDefault(_instance);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    return {
	      isIOS: _instance2.default.isIOS()
	    };
	  },


	  props: {
	    backgroundColor: { default: '#eeeeee' }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["root"]
	  }, [(_vm.isIOS) ? _c('div', {
	    style: {
	      width: '750px',
	      height: '40px',
	      backgroundColor: _vm.backgroundColor
	    }
	  }) : _vm._e(), _c('div', {
	    staticClass: ["wrapper"],
	    style: {
	      width: '750px',
	      height: _vm.isIOS ? '1294px' : '1334px',
	      backgroundColor: _vm.backgroundColor
	    }
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(51)
	)

	/* script */
	__vue_exports__ = __webpack_require__(52)

	/* template */
	var __vue_template__ = __webpack_require__(53)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/wangwei/WorkSpace/weex-frame/src/components/osc-navpage.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-49b64f2a"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = {
	  "root": {
	    "width": 750,
	    "position": "relative",
	    "display": "flex",
	    "flexDirection": "column"
	  },
	  "wrapper": {
	    "width": 750,
	    "position": "absolute",
	    "top": 100,
	    "bottom": 0
	  }
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mixins = __webpack_require__(11);

	var _mixins2 = _interopRequireDefault(_mixins);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  mixins: [_mixins2.default],

	  props: {
	    dataRole: { default: 'none' },
	    backgroundColor: { default: '#0099FF' },
	    height: { default: 88 },
	    title: { default: '' },
	    titleColor: { default: 'white' },
	    rightItemSrc: { default: '' },
	    rightItemTitle: { default: '' },
	    rightItemColor: { default: 'white' },
	    leftItemSrc: { default: '' },
	    leftItemTitle: { default: '' },
	    leftItemColor: { default: 'white' }
	  },

	  methods: {
	    naviBarRightItemClick: function naviBarRightItemClick(e) {
	      this.$emit('naviBarRightItemClick', e);
	    },
	    naviBarLeftItemClick: function naviBarLeftItemClick(e) {
	      this.$emit('naviBarLeftItemClick', e);
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["root"]
	  }, [(_vm.ios) ? _c('div', {
	    style: {
	      width: '750px',
	      height: '40px',
	      backgroundColor: _vm.backgroundColor
	    }
	  }) : _vm._e(), _c('osc-navbar', {
	    attrs: {
	      "dataRole": _vm.dataRole,
	      "height": _vm.height,
	      "backgroundColor": _vm.backgroundColor,
	      "title": _vm.title,
	      "titleColor": _vm.titleColor,
	      "leftItemSrc": _vm.leftItemSrc,
	      "leftItemTitle": _vm.leftItemTitle,
	      "leftItemColor": _vm.leftItemColor,
	      "rightItemSrc": _vm.rightItemSrc,
	      "rightItemTitle": _vm.rightItemTitle,
	      "rightItemColor": _vm.rightItemColor
	    },
	    on: {
	      "naviBarRightItemClick": _vm.naviBarRightItemClick,
	      "naviBarLeftItemClick": _vm.naviBarLeftItemClick
	    }
	  }), _c('div', {
	    staticClass: ["wrapper"],
	    style: {
	      top: _vm.ios ? (40 + _vm.height) : _vm.height
	    }
	  }, [_vm._t("default")], 2)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(55)
	)

	/* script */
	__vue_exports__ = __webpack_require__(56)

	/* template */
	var __vue_template__ = __webpack_require__(57)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/wangwei/WorkSpace/weex-frame/src/components/osc-navbar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-5f2e3c32"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = {
	  "root": {
	    "flexDirection": "row",
	    "width": 750,
	    "padding": 20,
	    "alignItems": "center",
	    "justifyContent": "space-between"
	  },
	  "text": {
	    "fontSize": 32
	  },
	  "img": {
	    "width": 50,
	    "height": 50
	  },
	  "title": {
	    "fontSize": 30,
	    "fontWeight": "bold",
	    "maxWidth": 360,
	    "textOverflow": "ellipsis"
	  }
	}

/***/ },
/* 56 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  props: {
	    // navbar
	    dataRole: { default: 'none' },
	    //导航条背景色
	    backgroundColor: { default: '#0099FF' },
	    //导航条高度
	    height: { default: 88 },
	    //导航条标题 
	    title: { default: '' },
	    //导航条标题颜色
	    titleColor: { default: 'white' },
	    //右侧按钮图片
	    rightItemSrc: { default: '' },
	    //右侧按钮标题
	    rightItemTitle: { default: '' },
	    //右侧按钮标题颜色
	    rightItemColor: { default: 'white' },
	    //左侧按钮图片
	    leftItemSrc: { default: '' },
	    //左侧按钮标题
	    leftItemTitle: { default: '' },
	    //左侧按钮颜色
	    leftItemColor: { default: 'white' }
	  },
	  methods: {
	    onClickRight: function onClickRight(e) {
	      this.$emit('naviBarRightItemClick');
	    },
	    onClickLeft: function onClickLeft(e) {
	      console.log('height', this.height);
	      this.$emit('naviBarLeftItemClick');
	    }
	  }
	};

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["root"],
	    style: {
	      height: _vm.height + 'px',
	      backgroundColor: _vm.backgroundColor
	    },
	    attrs: {
	      "dataRole": _vm.dataRole
	    }
	  }, [_c('div', {
	    staticClass: ["div-wrap"]
	  }, [(!_vm.leftItemSrc) ? _c('text', {
	    staticClass: ["text"],
	    style: {
	      color: _vm.leftItemColor
	    },
	    attrs: {
	      "naviItemPosition": "left"
	    },
	    on: {
	      "click": _vm.onClickLeft
	    }
	  }, [_vm._v(_vm._s(_vm.leftItemTitle) + "\n\n    ")]) : _vm._e(), (_vm.leftItemSrc) ? _c('image', {
	    staticClass: ["img"],
	    attrs: {
	      "naviItemPosition": "left",
	      "src": _vm.leftItemSrc
	    },
	    on: {
	      "click": _vm.onClickLeft
	    }
	  }) : _vm._e()]), _c('div', {
	    staticClass: ["div-wrap"]
	  }, [_c('text', {
	    staticClass: ["title"],
	    style: {
	      color: _vm.titleColor
	    },
	    attrs: {
	      "naviItemPosition": "center"
	    }
	  }, [_vm._v(_vm._s(_vm.title))])]), _c('div', {
	    staticClass: ["div-wrap"]
	  }, [(!_vm.rightItemSrc) ? _c('text', {
	    staticClass: ["text"],
	    style: {
	      color: _vm.rightItemColor
	    },
	    attrs: {
	      "naviItemPosition": "right"
	    },
	    on: {
	      "click": _vm.onClickRight
	    }
	  }, [_vm._v(_vm._s(_vm.rightItemTitle) + "\n    ")]) : _vm._e(), (_vm.rightItemSrc) ? _c('image', {
	    staticClass: ["img"],
	    attrs: {
	      "naviItemPosition": "right",
	      "src": _vm.rightItemSrc
	    },
	    on: {
	      "click": _vm.onClickRight
	    }
	  }) : _vm._e()])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(59)
	)

	/* script */
	__vue_exports__ = __webpack_require__(60)

	/* template */
	var __vue_template__ = __webpack_require__(65)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/wangwei/WorkSpace/weex-frame/src/components/osc-tabbar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-6c8a0735"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "width": 750,
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0
	  },
	  "content": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "marginTop": 0,
	    "marginBottom": 88
	  },
	  "tabbar": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "bottom": 0,
	    "left": 0,
	    "right": 0,
	    "height": 88
	  }
	}

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  props: {
	    tabItems: { default: [] },
	    selectedColor: { default: '#ff0000' },
	    unselectedColor: { default: '#000000' }
	  },
	  data: function data() {
	    return {
	      selectedIndex: 0
	    };
	  },

	  components: {
	    tabitem: __webpack_require__(61)
	  },
	  created: function created() {
	    this.select(this.selectedIndex);
	  },

	  methods: {
	    tabItemOnClick: function tabItemOnClick(e) {
	      this.selectedIndex = e.index;
	      this.select(e.index);
	      this.$emit('tabBarOnClick', e);
	    },
	    select: function select(index) {
	      for (var i = 0; i < this.tabItems.length; i++) {
	        var tabItem = this.tabItems[i];
	        if (i == index) {
	          tabItem.icon = tabItem.selectedImage;
	          tabItem.titleColor = this.selectedColor;
	          tabItem.visibility = 'visible';
	        } else {
	          tabItem.icon = tabItem.image;
	          tabItem.titleColor = this.unselectedColor;
	          tabItem.visibility = 'hidden';
	        }
	      }
	    }
	  }
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(62)
	)

	/* script */
	__vue_exports__ = __webpack_require__(63)

	/* template */
	var __vue_template__ = __webpack_require__(64)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/wangwei/WorkSpace/weex-frame/src/components/osc-tabitem.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-53c4d93e"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "flex": 1,
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": 88
	  },
	  "top-line": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "height": 2
	  },
	  "tab-icon": {
	    "marginTop": 5,
	    "width": 40,
	    "height": 40
	  },
	  "tab-text": {
	    "marginTop": 5,
	    "textAlign": "center",
	    "fontSize": 20
	  }
	}

/***/ },
/* 63 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  props: {
	    index: { default: 0 },
	    title: { default: '' },
	    titleColor: { default: '#000000' },
	    icon: { default: '' },
	    backgroundColor: { default: '#ffffff' }
	  },
	  methods: {
	    onclickitem: function onclickitem(e) {
	      this.$emit('tabItemOnClick', {
	        index: this.index
	      });
	    }
	  }
	};

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["container"],
	    style: {
	      backgroundColor: _vm.backgroundColor
	    },
	    on: {
	      "click": _vm.onclickitem
	    }
	  }, [_c('image', {
	    staticClass: ["top-line"],
	    attrs: {
	      "src": "http://gtms03.alicdn.com/tps/i3/TB1mdsiMpXXXXXpXXXXNw4JIXXX-640-4.png"
	    }
	  }), _c('image', {
	    staticClass: ["tab-icon"],
	    attrs: {
	      "src": _vm.icon
	    }
	  }), _c('text', {
	    staticClass: ["tab-text"],
	    style: {
	      color: _vm.titleColor
	    }
	  }, [_vm._v(_vm._s(_vm.title))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_vm._l((_vm.tabItems), function(item, index) {
	    return _c('embed', {
	      key: index,
	      staticClass: ["content"],
	      style: {
	        visibility: item.visibility
	      },
	      attrs: {
	        "src": item.src,
	        "type": "weex"
	      }
	    })
	  }), _c('div', {
	    staticClass: ["tabbar"],
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, _vm._l((_vm.tabItems), function(item, index) {
	    return _c('tabitem', {
	      key: index,
	      attrs: {
	        "index": item.index,
	        "icon": item.icon,
	        "title": item.title,
	        "titleColor": item.titleColor
	      },
	      on: {
	        "tabItemOnClick": _vm.tabItemOnClick
	      }
	    })
	  }))], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(67)
	)

	/* script */
	__vue_exports__ = __webpack_require__(68)

	/* template */
	var __vue_template__ = __webpack_require__(69)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/wangwei/WorkSpace/weex-frame/src/components/osc-list/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-1653cdf8"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = {
	  "root": {
	    "width": 750
	  },
	  "div-refresh": {
	    "width": 750,
	    "height": 100,
	    "paddingTop": 20,
	    "paddingBottom": 20,
	    "display": "flex",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "div-loading": {
	    "width": 750,
	    "height": 100,
	    "paddingTop": 20,
	    "paddingBottom": 20,
	    "display": "flex",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "text-tip": {
	    "fontSize": 30,
	    "color": "#333333"
	  },
	  "indicator": {
	    "width": 40,
	    "height": 40,
	    "color": "#45b5f0"
	  }
	}

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _model = __webpack_require__(17);

	var _model2 = _interopRequireDefault(_model);

	var _instance = __webpack_require__(16);

	var _instance2 = _interopRequireDefault(_instance);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  data: function data() {
	    return {
	      refreshDisplay: 'hide',
	      loadingDisplay: 'hide',
	      refreshPause: false,
	      loadingPause: false
	    };
	  },

	  props: {
	    refreshTip: {
	      type: String,
	      default: '↓ 下拉刷新'
	    },
	    loadingTip: {
	      type: String,
	      default: '↑ 上拉加载'
	    }
	  },

	  mounted: function mounted() {
	    var _this = this;

	    this.$on('refreshDone', function (e) {
	      _this.refreshDisplay = 'hide';
	      _model2.default.toast({
	        message: '刷新数据成功~'
	      });
	    });

	    this.$on('loadingDone', function (e) {
	      _this.loadingDisplay = 'hide';
	      _model2.default.toast({
	        message: '刷新数据成功~'
	      });
	    });
	  },


	  methods: {
	    onReset: function onReset() {
	      var _this2 = this;

	      setTimeout(function () {
	        _this2.refreshPause = false;
	        _this2.refreshDisplay = 'hide';
	        _this2.loadingPause = false;
	        _this2.loadingDisplay = 'hide';
	      }, 1000);
	    },
	    onRefresh: function onRefresh(e) {
	      var _this3 = this;

	      this.refreshDisplay = 'show';
	      if (this.refreshPause) {
	        this.onReset();
	        return;
	      }
	      this.refreshPause = true;
	      this.$emit('refresh', e);
	      // 三秒之内只允许一次加载
	      setTimeout(function () {
	        _this3.refreshPause = false;
	      }, 3000);
	      // 十秒超时
	      setTimeout(function () {
	        if (_this3.refreshDisplay === 'show') {
	          _this3.onReset();
	          _model2.default.toast({
	            message: '网络请求超时~'
	          });
	        }
	      }, 10000);
	    },
	    onLoading: function onLoading(e) {
	      var _this4 = this;

	      this.loadingDisplay = 'show';
	      if (this.loadingPause) {
	        this.onReset();
	        return;
	      }
	      this.loadingPause = true;
	      this.$emit('loading', e);
	      // 三秒之内只允许一次加载
	      setTimeout(function () {
	        _this4.loadingPause = false;
	      }, 3000);
	      // 十秒超时
	      setTimeout(function () {
	        if (_this4.loadingDisplay === 'show') {
	          _this4.onReset();
	          _model2.default.toast({
	            message: '网络请求超时~'
	          });
	        }
	      }, 10000);
	    }
	  }
	};

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('list', {
	    staticClass: ["root"]
	  }, [_c('refresh', {
	    staticClass: ["div-refresh"],
	    attrs: {
	      "display": _vm.refreshDisplay
	    },
	    on: {
	      "refresh": _vm.onRefresh
	    }
	  }, [(_vm.refreshDisplay === 'hide') ? _c('text', {
	    staticClass: ["text-tip"]
	  }, [_vm._v(_vm._s(_vm.refreshTip))]) : _vm._e(), _c('loading-indicator', {
	    staticClass: ["indicator"]
	  })], 1), _vm._t("default"), _c('loading', {
	    staticClass: ["div-loading"],
	    attrs: {
	      "display": _vm.loadingDisplay
	    },
	    on: {
	      "loading": _vm.onLoading
	    }
	  }, [(_vm.loadingDisplay === 'hide') ? _c('text', {
	    staticClass: ["text-tip"]
	  }, [_vm._v(_vm._s(_vm.loadingTip))]) : _c('text', {
	    staticClass: ["text-tip"]
	  }, [_vm._v("加载中...")])])], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(71)
	)

	/* script */
	__vue_exports__ = __webpack_require__(72)

	/* template */
	var __vue_template__ = __webpack_require__(73)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/wangwei/WorkSpace/weex-frame/src/components/osc-scroller/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-4f87c714"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = {
	  "root": {
	    "width": 750
	  },
	  "div-refresh": {
	    "width": 750,
	    "height": 100,
	    "paddingTop": 20,
	    "paddingBottom": 20,
	    "display": "flex",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "div-loading": {
	    "width": 750,
	    "height": 100,
	    "paddingTop": 20,
	    "paddingBottom": 20,
	    "display": "flex",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "text-tip": {
	    "fontSize": 30,
	    "color": "#333333"
	  },
	  "indicator": {
	    "width": 40,
	    "height": 40,
	    "color": "#45b5f0"
	  }
	}

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _model = __webpack_require__(17);

	var _model2 = _interopRequireDefault(_model);

	var _instance = __webpack_require__(16);

	var _instance2 = _interopRequireDefault(_instance);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  data: function data() {
	    return {
	      refreshDisplay: 'hide',
	      loadingDisplay: 'hide',
	      refreshPause: false,
	      loadingPause: false
	    };
	  },

	  props: {
	    refreshTip: {
	      type: String,
	      default: '↓ 下拉刷新'
	    },
	    loadingTip: {
	      type: String,
	      default: '↑ 上拉加载'
	    }
	  },

	  mounted: function mounted() {
	    var _this = this;

	    this.$on('refreshDone', function (e) {
	      _this.refreshDisplay = 'hide';
	      _model2.default.toast({
	        message: '刷新数据成功~'
	      });
	    });

	    this.$on('loadingDone', function (e) {
	      _this.loadingDisplay = 'hide';
	      _model2.default.toast({
	        message: '刷新数据成功~'
	      });
	    });
	  },


	  methods: {
	    onRefresh: function onRefresh(e) {
	      var _this2 = this;

	      if (this.refreshPause) {
	        return;
	      }
	      this.$emit('refresh', e);
	      this.refreshPause = true;
	      this.refreshDisplay = 'show';
	      // 三秒之内只允许一次加载
	      setTimeout(function () {
	        _this2.refreshPause = false;
	      }, 3000);
	      // 十秒超时
	      setTimeout(function () {
	        if (_this2.refreshDisplay = 'show') {
	          _this2.refreshDisplay = 'hide';
	          _this2.refreshPause = true;
	          _model2.default.toast({
	            message: '网络请求超时~'
	          });
	        }
	      }, 10000);
	    },
	    onLoading: function onLoading(e) {
	      var _this3 = this;

	      if (this.loadingPause) {
	        return;
	      }
	      this.$emit('loading', e);
	      this.loadingPause = true;
	      this.loadingDisplay = 'show';
	      // 三秒之内只允许一次加载
	      setTimeout(function () {
	        _this3.loadingPause = false;
	      }, 3000);
	      // 十秒超时
	      setTimeout(function () {
	        if (_this3.loadingDisplay === 'show') {
	          _this3.loadingPause = true;
	          _this3.loadingDisplay = 'hide';
	          _model2.default.toast({
	            message: '网络请求超时~'
	          });
	        }
	      }, 10000);
	    }
	  }
	};

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', {
	    staticClass: ["root"]
	  }, [_c('refresh', {
	    staticClass: ["div-refresh"],
	    attrs: {
	      "display": _vm.refreshDisplay
	    },
	    on: {
	      "refresh": _vm.onRefresh
	    }
	  }, [(_vm.refreshDisplay === 'hide') ? _c('text', {
	    staticClass: ["text-tip"]
	  }, [_vm._v(_vm._s(_vm.refreshTip))]) : _vm._e(), _c('loading-indicator', {
	    staticClass: ["indicator"]
	  })], 1), _vm._t("default"), _c('loading', {
	    staticClass: ["div-loading"],
	    attrs: {
	      "display": _vm.loadingDisplay
	    },
	    on: {
	      "loading": _vm.onLoading
	    }
	  }, [(_vm.loadingDisplay === 'hide') ? _c('text', {
	    staticClass: ["text-tip"]
	  }, [_vm._v(_vm._s(_vm.loadingTip))]) : _c('text', {
	    staticClass: ["text-tip"]
	  }, [_vm._v("加载中...")])])], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(75)
	)

	/* script */
	__vue_exports__ = __webpack_require__(76)

	/* template */
	var __vue_template__ = __webpack_require__(77)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/wangwei/WorkSpace/weex-frame/src/components/wx-button.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-afa76d36"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = {
	  "btn": {
	    "marginBottom": 0,
	    "alignItems": "center",
	    "justifyContent": "center",
	    "borderWidth": 1,
	    "borderStyle": "solid",
	    "borderColor": "#333333"
	  },
	  "btn-default": {
	    "color": "rgb(51,51,51)"
	  },
	  "btn-primary": {
	    "backgroundColor": "rgb(40,96,144)",
	    "borderColor": "rgb(40,96,144)"
	  },
	  "btn-success": {
	    "backgroundColor": "rgb(92,184,92)",
	    "borderColor": "rgb(76,174,76)"
	  },
	  "btn-info": {
	    "backgroundColor": "rgb(91,192,222)",
	    "borderColor": "rgb(70,184,218)"
	  },
	  "btn-warning": {
	    "backgroundColor": "rgb(240,173,78)",
	    "borderColor": "rgb(238,162,54)"
	  },
	  "btn-danger": {
	    "backgroundColor": "rgb(217,83,79)",
	    "borderColor": "rgb(212,63,58)"
	  },
	  "btn-link": {
	    "borderColor": "rgba(0,0,0,0)",
	    "borderRadius": 0
	  },
	  "btn-txt-default": {
	    "color": "rgb(51,51,51)"
	  },
	  "btn-txt-primary": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-success": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-info": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-warning": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-danger": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-link": {
	    "color": "rgb(51,122,183)"
	  },
	  "btn-sz-large": {
	    "width": 300,
	    "height": 100,
	    "paddingTop": 25,
	    "paddingBottom": 25,
	    "paddingLeft": 40,
	    "paddingRight": 40,
	    "borderRadius": 15
	  },
	  "btn-sz-middle": {
	    "width": 240,
	    "height": 80,
	    "paddingTop": 15,
	    "paddingBottom": 15,
	    "paddingLeft": 30,
	    "paddingRight": 30,
	    "borderRadius": 10
	  },
	  "btn-sz-small": {
	    "width": 170,
	    "height": 60,
	    "paddingTop": 12,
	    "paddingBottom": 12,
	    "paddingLeft": 25,
	    "paddingRight": 25,
	    "borderRadius": 7
	  },
	  "btn-txt-sz-large": {
	    "fontSize": 45
	  },
	  "btn-txt-sz-middle": {
	    "fontSize": 35
	  },
	  "btn-txt-sz-small": {
	    "fontSize": 30
	  }
	}

/***/ },
/* 76 */
/***/ function(module, exports) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	  props: {
	    type: { default: 'default' },
	    size: { default: 'large' },
	    value: { default: '' }
	  },
	  methods: {}
	};

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: ['btn', 'btn-' + _vm.type, 'btn-sz-' + _vm.size]
	  }, [_c('text', {
	    class: ['btn-txt', 'btn-txt-' + _vm.type, 'btn-txt-sz-' + _vm.size]
	  }, [_vm._v(_vm._s(_vm.value))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(79)
	)

	/* script */
	__vue_exports__ = __webpack_require__(80)

	/* template */
	var __vue_template__ = __webpack_require__(81)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/wangwei/WorkSpace/weex-frame/src/components/wx-countdown.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-5b70a5ce"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = {
	  "wrap": {
	    "overflow": "hidden"
	  }
	}

/***/ },
/* 80 */
/***/ function(module, exports) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	  data: {
	    now: 0,
	    remain: 0,
	    time: {
	      elapse: 0,
	      D: '0',
	      DD: '0',
	      h: '0',
	      hh: '00',
	      H: '0',
	      HH: '0',
	      m: '0',
	      mm: '00',
	      M: '0',
	      MM: '0',
	      s: '0',
	      ss: '00',
	      S: '0',
	      SS: '0'
	    },
	    outofview: false
	  },
	  ready: function ready() {
	    if (this.remain <= 0) {
	      return;
	    }
	    // this.isWeb = this.$getConfig().env.platform === 'Web';
	    this.now = Date.now();
	    this.nextTick();
	  },
	  methods: {
	    nextTick: function nextTick() {
	      if (this.outofview) {
	        setTimeout(this.nextTick.bind(this), 1000);
	      } else {
	        this.time.elapse = parseInt((Date.now() - this.now) / 1000);

	        if (this.calc()) {
	          this.$emit('tick', Object.assign({}, this.time));
	          setTimeout(this.nextTick.bind(this), 1000);
	        } else {
	          this.$emit('alarm', Object.assign({}, this.time));
	        }
	        this._app.updateActions();
	      }
	    },
	    format: function format(str) {
	      if (str.length >= 2) {
	        return str;
	      } else {
	        return '0' + str;
	      }
	    },
	    calc: function calc() {
	      var remain = this.remain - this.time.elapse;
	      if (remain < 0) {
	        remain = 0;
	      }
	      this.time.D = String(parseInt(remain / 86400));
	      this.time.DD = this.format(this.time.D);
	      this.time.h = String(parseInt((remain - parseInt(this.time.D) * 86400) / 3600));
	      this.time.hh = this.format(this.time.h);
	      this.time.H = String(parseInt(remain / 3600));
	      this.time.HH = this.format(this.time.H);
	      this.time.m = String(parseInt((remain - parseInt(this.time.H) * 3600) / 60));
	      this.time.mm = this.format(this.time.m);
	      this.time.M = String(parseInt(remain / 60));
	      this.time.MM = this.format(this.time.M);
	      this.time.s = String(remain - parseInt(this.time.M) * 60);
	      this.time.ss = this.format(this.time.s);
	      this.time.S = String(remain);
	      this.time.SS = this.format(this.time.S);
	      // console.log(remain, this.D, this.h, this.hh, this.H, this.HH, this.m, this.MM, this.s, this.ss, this.S, this.SS);
	      return remain > 0;
	    },
	    appeared: function appeared() {
	      this.outofview = false;
	    },
	    disappeared: function disappeared() {
	      this.outofview = true;
	    }
	  }
	};

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      overflow: "hidden",
	      flexDirection: "row"
	    },
	    on: {
	      "onappear": _vm.appeared,
	      "ondisappear": _vm.disappeared
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(83)
	)

	/* script */
	__vue_exports__ = __webpack_require__(84)

	/* template */
	var __vue_template__ = __webpack_require__(85)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/wangwei/WorkSpace/weex-frame/src/components/wx-hn.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-dec4aa8e"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = {
	  "h1": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "h2": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "h3": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "txt-h1": {
	    "fontSize": 70
	  },
	  "txt-h2": {
	    "fontSize": 52
	  },
	  "txt-h3": {
	    "fontSize": 42
	  }
	}

/***/ },
/* 84 */
/***/ function(module, exports) {

	'use strict';

	//
	//
	//
	//
	//
	//

	module.exports = {
	  data: {
	    level: 1,
	    value: ''
	  },
	  methods: {}
	};

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: 'h' + _vm.level,
	    staticStyle: {
	      justifyContent: "center"
	    }
	  }, [_c('text', {
	    class: 'txt-h' + _vm.level
	  }, [_vm._v(_vm._s(_vm.value))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(87)
	)

	/* script */
	__vue_exports__ = __webpack_require__(88)

	/* template */
	var __vue_template__ = __webpack_require__(89)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/wangwei/WorkSpace/weex-frame/src/components/wx-list-item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-1c13a402"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ },
/* 87 */
/***/ function(module, exports) {

	module.exports = {
	  "item": {
	    "paddingTop": 25,
	    "paddingBottom": 25,
	    "paddingLeft": 35,
	    "paddingRight": 35,
	    "height": 160,
	    "justifyContent": "center",
	    "borderBottomWidth": 1,
	    "borderColor": "#dddddd"
	  }
	}

/***/ },
/* 88 */
/***/ function(module, exports) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	  data: {
	    bgColor: '#ffffff'
	  },
	  methods: {
	    touchstart: function touchstart() {},
	    touchend: function touchend() {}
	  }
	};

/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["item"],
	    style: {
	      backgroundColor: _vm.bgColor
	    },
	    on: {
	      "ontouchstart": _vm.touchstart,
	      "ontouchend": _vm.touchend
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(91)
	)

	/* script */
	__vue_exports__ = __webpack_require__(92)

	/* template */
	var __vue_template__ = __webpack_require__(93)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/wangwei/WorkSpace/weex-frame/src/components/wx-marquee.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-7e37747f"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ },
/* 91 */
/***/ function(module, exports) {

	module.exports = {
	  "wrap": {
	    "overflow": "hidden",
	    "position": "relative"
	  },
	  "anim": {
	    "flexDirection": "column",
	    "position": "absolute",
	    "transform": "translateY(0) translateZ(0)"
	  }
	}

/***/ },
/* 92 */
/***/ function(module, exports) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	  data: {
	    step: 0,
	    count: 0,
	    index: 1,
	    duration: 0,
	    interval: 0,
	    outofview: false
	  },
	  ready: function ready() {
	    if (this.interval > 0 && this.step > 0 && this.duration > 0) {
	      this.nextTick();
	    }
	  },
	  methods: {
	    nextTick: function nextTick() {
	      var self = this;
	      if (this.outofview) {
	        setTimeout(self.nextTick.bind(self), self.interval);
	      } else {
	        setTimeout(function () {
	          self.animation(self.nextTick.bind(self));
	        }, self.interval);
	      }
	    },
	    animation: function animation(cb) {
	      var self = this;
	      var offset = -self.step * self.index;
	      var $animation = __weex_require_module__('animation');
	      $animation.transition(this.$el('anim'), {
	        styles: {
	          transform: 'translateY(' + String(offset) + 'px) translateZ(0)'
	        },
	        timingFunction: 'ease',
	        duration: self.duration
	      }, function () {
	        self.index = (self.index + 1) % self.count;
	        self.$emit('change', {
	          index: self.index,
	          count: self.count
	        });
	        cb && cb();
	      });
	    },
	    appeared: function appeared() {
	      this.outofview = false;
	    },
	    disappeared: function disappeared() {
	      this.outofview = true;
	    }
	  }
	};

/***/ },
/* 93 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrap"],
	    on: {
	      "onappear": _vm.appeared,
	      "ondisappear": _vm.disappeared
	    }
	  }, [_c('div', {
	    staticClass: ["anim"],
	    attrs: {
	      "id": "anim"
	    }
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(95)
	)

	/* script */
	__vue_exports__ = __webpack_require__(96)

	/* template */
	var __vue_template__ = __webpack_require__(97)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/wangwei/WorkSpace/weex-frame/src/components/wx-navbar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-f3a8c17a"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ },
/* 95 */
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "width": 750
	  },
	  "right-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "right": 32,
	    "textAlign": "right",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "left-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "left": 32,
	    "textAlign": "left",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "center-text": {
	    "position": "absolute",
	    "bottom": 25,
	    "left": 172,
	    "right": 172,
	    "textAlign": "center",
	    "fontSize": 36,
	    "fontWeight": "bold"
	  },
	  "left-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "left": 28,
	    "width": 50,
	    "height": 50
	  },
	  "right-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "right": 28,
	    "width": 50,
	    "height": 50
	  }
	}

/***/ },
/* 96 */
/***/ function(module, exports) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	  props: {
	    dataRole: { default: 'navbar' },
	    //导航条背景色
	    backgroundColor: { default: 'black' },
	    //导航条高度
	    height: { default: 88 },
	    //导航条标题
	    title: { default: '' },
	    //导航条标题颜色
	    titleColor: { default: 'black' },
	    //右侧按钮图片
	    rightItemSrc: { default: '' },
	    //右侧按钮标题
	    rightItemTitle: { default: '' },
	    //右侧按钮标题颜色
	    rightItemColor: { default: 'black' },
	    //左侧按钮图片
	    leftItemSrc: { default: '' },
	    //左侧按钮标题
	    leftItemTitle: { default: '' },
	    //左侧按钮颜色
	    leftItemColor: { default: 'black' }
	  },
	  methods: {
	    onclickrightitem: function onclickrightitem(e) {
	      this.$dispatch('naviBar.rightItem.click', {});
	    },
	    onclickleftitem: function onclickleftitem(e) {
	      this.$dispatch('naviBar.leftItem.click', {});
	    }
	  }
	};

/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["container"],
	    style: {
	      height: _vm.height,
	      backgroundColor: _vm.backgroundColor
	    },
	    attrs: {
	      "dataRole": _vm.dataRole
	    }
	  }, [(!_vm.rightItemSrc) ? _c('text', {
	    staticClass: ["right-text"],
	    style: {
	      color: _vm.rightItemColor
	    },
	    attrs: {
	      "naviItemPosition": "right",
	      "onclick": "onclickrightitem"
	    }
	  }, [_vm._v(_vm._s(_vm.rightItemTitle))]) : _vm._e(), (_vm.rightItemSrc) ? _c('image', {
	    staticClass: ["right-image"],
	    attrs: {
	      "naviItemPosition": "right",
	      "src": _vm.rightItemSrc,
	      "onclick": "onclickrightitem"
	    }
	  }) : _vm._e(), (!_vm.leftItemSrc) ? _c('text', {
	    staticClass: ["left-text"],
	    style: {
	      color: _vm.leftItemColor
	    },
	    attrs: {
	      "naviItemPosition": "left",
	      "onclick": "onclickleftitem"
	    }
	  }, [_vm._v(_vm._s(_vm.leftItemTitle))]) : _vm._e(), (_vm.leftItemSrc) ? _c('image', {
	    staticClass: ["left-image"],
	    attrs: {
	      "naviItemPosition": "left",
	      "src": _vm.leftItemSrc,
	      "onclick": "onclickleftitem"
	    }
	  }) : _vm._e(), _c('text', {
	    staticClass: ["center-text"],
	    style: {
	      color: _vm.titleColor
	    },
	    attrs: {
	      "naviItemPosition": "center"
	    }
	  }, [_vm._v(_vm._s(_vm.title))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(99)
	)

	/* script */
	__vue_exports__ = __webpack_require__(100)

	/* template */
	var __vue_template__ = __webpack_require__(101)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/wangwei/WorkSpace/weex-frame/src/components/wx-navpage.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-448c72e2"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ },
/* 99 */
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "width": 750
	  },
	  "navbar": {
	    "marginTop": 40
	  }
	}

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	  components: {
	    'wx-navbar': __webpack_require__(94)
	  },
	  props: {
	    dataRole: { default: 'navbar' },
	    backgroundColor: { default: 'black' },
	    height: { default: 88 },
	    title: { default: '' },
	    titleColor: { default: 'black' },
	    rightItemSrc: { default: '' },
	    rightItemTitle: { default: '' },
	    rightItemColor: { default: 'black' },
	    leftItemSrc: { default: '' },
	    leftItemTitle: { default: '' },
	    leftItemColor: { default: 'black' }
	  }
	};

/***/ },
/* 101 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('wx-navbar', {
	    staticClass: ["navbar"],
	    attrs: {
	      "dataRole": _vm.dataRole,
	      "height": _vm.height,
	      "backgroundColor": _vm.backgroundColor,
	      "title": _vm.title,
	      "titleColor": _vm.titleColor,
	      "leftItemSrc": _vm.leftItemSrc,
	      "leftItemTitle": _vm.leftItemTitle,
	      "leftItemColor": _vm.leftItemColor,
	      "rightItemSrc": _vm.rightItemSrc,
	      "rightItemTitle": _vm.rightItemTitle,
	      "rightItemColor": _vm.rightItemColor
	    }
	  }), _c('div', {
	    staticClass: ["wrapper"],
	    style: {
	      marginTop: _vm.height
	    }
	  }, [_vm._t("default")], 2)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(103)
	)

	/* script */
	__vue_exports__ = __webpack_require__(104)

	/* template */
	var __vue_template__ = __webpack_require__(105)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/wangwei/WorkSpace/weex-frame/src/components/wx-panel.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-d8ee7abe"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = {
	  "panel": {
	    "marginBottom": 20,
	    "backgroundColor": "#ffffff",
	    "borderColor": "#dddddd",
	    "borderWidth": 1
	  },
	  "panel-primary": {
	    "borderColor": "rgb(40,96,144)"
	  },
	  "panel-success": {
	    "borderColor": "rgb(76,174,76)"
	  },
	  "panel-info": {
	    "borderColor": "rgb(70,184,218)"
	  },
	  "panel-warning": {
	    "borderColor": "rgb(238,162,54)"
	  },
	  "panel-danger": {
	    "borderColor": "rgb(212,63,58)"
	  },
	  "panel-header": {
	    "backgroundColor": "#f5f5f5",
	    "fontSize": 40,
	    "color": "#333333"
	  },
	  "panel-header-primary": {
	    "backgroundColor": "rgb(40,96,144)",
	    "color": "#ffffff"
	  },
	  "panel-header-success": {
	    "backgroundColor": "rgb(92,184,92)",
	    "color": "#ffffff"
	  },
	  "panel-header-info": {
	    "backgroundColor": "rgb(91,192,222)",
	    "color": "#ffffff"
	  },
	  "panel-header-warning": {
	    "backgroundColor": "rgb(240,173,78)",
	    "color": "#ffffff"
	  },
	  "panel-header-danger": {
	    "backgroundColor": "rgb(217,83,79)",
	    "color": "#ffffff"
	  }
	}

/***/ },
/* 104 */
/***/ function(module, exports) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	  props: {
	    type: { default: 'default' },
	    title: { default: '' },
	    paddingBody: { default: 20 },
	    paddingHead: { default: 20 },
	    dataClass: { default: '' },
	    border: { default: 0 }
	  },
	  ready: function ready() {}
	};

/***/ },
/* 105 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: ['panel', 'panel-' + _vm.type],
	    style: {
	      borderWidth: _vm.border
	    }
	  }, [_c('text', {
	    class: ['panel-header', 'panel-header-' + _vm.type],
	    style: {
	      paddingTop: _vm.paddingHead,
	      paddingBottom: _vm.paddingHead,
	      paddingLeft: _vm.paddingHead * 1.5,
	      paddingRight: _vm.paddingHead * 1.5
	    }
	  }, [_vm._v("\n    " + _vm._s(_vm.title) + "\n  ")]), _c('div', {
	    class: ['panel-body', 'panel-body-' + _vm.type],
	    style: {
	      paddingTop: _vm.paddingBody,
	      paddingBottom: _vm.paddingBody,
	      paddingLeft: _vm.paddingBody * 1.5,
	      paddingRight: _vm.paddingBody * 1.5
	    }
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(107)
	)

	/* script */
	__vue_exports__ = __webpack_require__(108)

	/* template */
	var __vue_template__ = __webpack_require__(109)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/wangwei/WorkSpace/weex-frame/src/components/wx-tabbar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-224cc491"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ },
/* 107 */
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "width": 750,
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0
	  },
	  "content": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "marginTop": 0,
	    "marginBottom": 88
	  },
	  "tabbar": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "bottom": 0,
	    "left": 0,
	    "right": 0,
	    "height": 88
	  }
	}

/***/ },
/* 108 */
/***/ function(module, exports) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	  data: {
	    tabItems: [],
	    selectedIndex: 0,
	    selectedColor: '#ff0000',
	    unselectedColor: '#000000'
	  },
	  created: function created() {
	    this.selected(this.selectedIndex);

	    this.$on('tabItem.onClick', function (e) {
	      var detail = e.detail;
	      this.selectedIndex = detail.index;
	      this.selected(detail.index);

	      var params = {
	        index: detail.index
	      };
	      this.$dispatch('tabBar.onClick', params);
	    });
	  },
	  methods: {
	    selected: function selected(index) {
	      for (var i = 0; i < this.tabItems.length; i++) {
	        var tabItem = this.tabItems[i];
	        if (i == index) {
	          tabItem.icon = tabItem.selectedImage;
	          tabItem.titleColor = this.selectedColor;
	          tabItem.visibility = 'visible';
	        } else {
	          tabItem.icon = tabItem.image;
	          tabItem.titleColor = this.unselectedColor;
	          tabItem.visibility = 'hidden';
	        }
	      }
	    }
	  }
	};

/***/ },
/* 109 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_vm._l((_vm.tabItems), function(item) {
	    return _c('embed', {
	      key: item.src,
	      staticClass: ["content"],
	      style: {
	        visibility: item.visibility
	      },
	      attrs: {
	        "src": item.src,
	        "type": "weex"
	      }
	    })
	  }), _c('div', {
	    staticClass: ["tabbar"],
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, _vm._l((_vm.tabItems), function(item) {
	    return _c('wx-tabitem', {
	      key: item.src,
	      attrs: {
	        "index": item.index,
	        "icon": item.icon,
	        "title": item.title,
	        "titleColor": item.titleColor
	      }
	    })
	  }))], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(111)
	)

	/* script */
	__vue_exports__ = __webpack_require__(112)

	/* template */
	var __vue_template__ = __webpack_require__(113)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/wangwei/WorkSpace/weex-frame/src/components/wx-tabitem.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-4e9afcf6"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ },
/* 111 */
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "flex": 1,
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": 88
	  },
	  "top-line": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "height": 2
	  },
	  "tab-icon": {
	    "marginTop": 5,
	    "width": 40,
	    "height": 40
	  },
	  "tab-text": {
	    "marginTop": 5,
	    "textAlign": "center",
	    "fontSize": 20
	  }
	}

/***/ },
/* 112 */
/***/ function(module, exports) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	  data: {
	    index: 0,
	    title: '',
	    titleColor: '#000000',
	    icon: '',
	    backgroundColor: '#ffffff'
	  },
	  methods: {
	    onclickitem: function onclickitem(e) {
	      var vm = this;
	      var params = {
	        index: vm.index
	      };
	      vm.$dispatch('tabItem.onClick', params);
	    }
	  }
	};

/***/ },
/* 113 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["container"],
	    style: {
	      backgroundColor: _vm.backgroundColor
	    },
	    on: {
	      "click": _vm.onclickitem
	    }
	  }, [_c('image', {
	    staticClass: ["top-line"],
	    attrs: {
	      "src": "http://gtms03.alicdn.com/tps/i3/TB1mdsiMpXXXXXpXXXXNw4JIXXX-640-4.png"
	    }
	  }), _c('image', {
	    staticClass: ["tab-icon"],
	    attrs: {
	      "src": _vm.icon
	    }
	  }), _c('text', {
	    staticClass: ["tab-text"],
	    style: {
	      color: _vm.titleColor
	    }
	  }, [_vm._v(_vm._s(_vm.title))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(115)
	)

	/* script */
	__vue_exports__ = __webpack_require__(116)

	/* template */
	var __vue_template__ = __webpack_require__(117)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/wangwei/WorkSpace/weex-frame/src/components/wx-tip.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-0e48da10"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ },
/* 115 */
/***/ function(module, exports) {

	module.exports = {
	  "tip": {
	    "paddingLeft": 36,
	    "paddingRight": 36,
	    "paddingTop": 36,
	    "paddingBottom": 36,
	    "borderRadius": 10
	  },
	  "tip-txt": {
	    "fontSize": 28
	  },
	  "tip-success": {
	    "backgroundColor": "#dff0d8",
	    "borderColor": "#d6e9c6"
	  },
	  "tip-txt-success": {
	    "color": "#3c763d"
	  },
	  "tip-info": {
	    "backgroundColor": "#d9edf7",
	    "borderColor": "#bce8f1"
	  },
	  "tip-txt-info": {
	    "color": "#31708f"
	  },
	  "tip-warning": {
	    "backgroundColor": "#fcf8e3",
	    "borderColor": "#faebcc"
	  },
	  "tip-txt-warning": {
	    "color": "#8a6d3b"
	  },
	  "tip-danger": {
	    "backgroundColor": "#f2dede",
	    "borderColor": "#ebccd1"
	  },
	  "tip-txt-danger": {
	    "color": "#a94442"
	  }
	}

/***/ },
/* 116 */
/***/ function(module, exports) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	  data: {
	    type: 'success',
	    value: ''
	  }
	};

/***/ },
/* 117 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: ['tip', 'tip-' + _vm.type]
	  }, [_c('text', {
	    class: ['tip-txt', 'tip-txt-' + _vm.type]
	  }, [_vm._v(_vm._s(_vm.value))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(119)
	)

	/* script */
	__vue_exports__ = __webpack_require__(120)

	/* template */
	var __vue_template__ = __webpack_require__(122)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/wangwei/WorkSpace/weex-frame/src/components/wx-tab.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-2b20f61c"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ },
/* 119 */
/***/ function(module, exports) {

	module.exports = {
	  "row": {
	    "flexDirection": "row",
	    "height": 60
	  }
	}

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _multiItems = __webpack_require__(121);

	var animation = weex.requireModule('animation'); //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var modal = weex.requireModule('modal');
	module.exports = {
	  mixins: [_multiItems.parentMixin],
	  props: {
	    fontSize: { default: '26px' },
	    defaultColor: { default: '#000' },
	    activeColor: { default: '#FF7F24' },
	    activeClass: { default: '' },
	    barActiveColor: { default: '#FF7F24' },
	    lineWidth: { default: 3 },
	    currentIndex: { default: 0 }
	  },
	  created: function created() {
	    this.move();
	  },

	  computed: {
	    barStyle: function barStyle() {
	      var width = 750 / this.number;
	      return {
	        width: width + 'px',
	        height: this.lineWidth + 'px',
	        backgroundColor: this.barActiveColor
	      };
	    },
	    left: function left() {
	      var width = 750 / this.number;
	      var left = this.currentIndex * width;
	      return left;
	    }
	  },
	  methods: {
	    move: function move() {
	      var barLineEl = this.$refs.barLine;
	      animation.transition(barLineEl, {
	        styles: {
	          transform: 'translate(' + this.left + 'px, 0px)',
	          transformOrigin: 'center center'
	        },
	        duration: 200, //ms
	        timingFunction: 'ease',
	        delay: 0 //ms
	      }, function () {
	        modal.toast({ message: 'animation finished.' });
	      });
	    }
	  }
	};

/***/ },
/* 121 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// import { go } from '../libs/router'

	var parentMixin = {
	  mounted: function mounted() {
	    if (this.value >= 0) {
	      this.currentIndex = this.value;
	    }
	    this.updateIndex();
	  },

	  methods: {
	    updateIndex: function updateIndex() {
	      if (!this.$children || !this.$children.length) return;
	      this.number = this.$children.length;
	      var children = this.$children;
	      for (var i = 0; i < children.length; i++) {
	        children[i].currentIndex = i;
	        if (children[i].currentSelected) {
	          this.index = i;
	        }
	      }
	    }
	  },
	  props: {
	    value: Number
	  },
	  watch: {
	    currentIndex: function currentIndex(val, oldVal) {
	      oldVal > -1 && this.$children[oldVal] && (this.$children[oldVal].currentSelected = false);
	      val > -1 && this.$children[val] && (this.$children[val].currentSelected = true);
	      this.$emit('input', val);
	    },
	    index: function index(val) {
	      this.currentIndex = val;
	    },
	    value: function value(val) {
	      this.index = val;
	    }
	  },
	  data: function data() {
	    return {
	      index: -1,
	      currentIndex: this.index,
	      number: this.$children.length
	    };
	  }
	};

	var childMixin = {
	  props: {
	    selected: {
	      type: Boolean,
	      default: false
	    }
	  },
	  mounted: function mounted() {
	    this.$parent.updateIndex();
	  },
	  beforeDestroy: function beforeDestroy() {
	    var $parent = this.$parent;
	    this.$nextTick(function () {
	      $parent.updateIndex();
	    });
	  },

	  watch: {
	    currentSelected: function currentSelected(val) {
	      if (val) {
	        this.$parent.index = this.currentIndex;
	      }
	    },
	    selected: function selected(val) {
	      this.currentSelected = val;
	    }
	  },
	  data: function data() {
	    return {
	      currentIndex: -1,
	      currentSelected: this.selected
	    };
	  }
	};

	exports.parentMixin = parentMixin;
	exports.childMixin = childMixin;

/***/ },
/* 122 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('div', {
	    staticClass: ["row"]
	  }, [_vm._t("default")], 2), _c('div', {
	    staticClass: ["row"]
	  }, [_c('div', {
	    ref: "barLine",
	    style: _vm.barStyle
	  })])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(124)
	)

	/* script */
	__vue_exports__ = __webpack_require__(125)

	/* template */
	var __vue_template__ = __webpack_require__(126)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/wangwei/WorkSpace/weex-frame/src/components/wx-tab-item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-1614853e"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ },
/* 124 */
/***/ function(module, exports) {

	module.exports = {
	  "item": {
	    "flex": 1,
	    "justifyContent": "center",
	    "alignItems": "center"
	  }
	}

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _multiItems = __webpack_require__(121);

	var modal = weex.requireModule('modal'); //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  mixins: [_multiItems.childMixin],
	  props: {},
	  computed: {
	    style: function style() {
	      return {
	        color: this.$parent.index === this.currentIndex ? this.$parent.activeColor : this.$parent.defaultColor,
	        fontSize: this.$parent.fontSize
	      };
	    }
	  },
	  methods: {
	    onItemClick: function onItemClick(hasLink) {
	      var _this = this;

	      this.currentSelected = true;
	      this.$parent.currentIndex = this.currentIndex;

	      this.$parent.move();
	      this.$nextTick(function () {
	        _this.$emit('onItemClick', {
	          index: _this.currentIndex
	        });
	      });

	      if (hasLink === true) {
	        // go(this.link, this.$router)
	      }
	    }
	  }
	};

/***/ },
/* 126 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["item"],
	    on: {
	      "click": _vm.onItemClick
	    }
	  }, [_c('text', {
	    style: _vm.style
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }
/******/ ]);
'use strict';
var fs, get, _;

_ = require('lodash');

fs = require('fs');

get = function(path) {
  var buf, line, md, obj, _i, _len, _ref;
  if (path == null) {
    path = (function() {
      switch (process.platform) {
        case 'win32':
          return 'C:/Windows/System32/drivers/etc/hosts';
        default:
          return '/etc/hosts';
      }
    })();
  }
  buf = '' + fs.readFileSync(path);
  obj = {};
  _ref = buf.replace(/#.*/g, '').split(/[\r\n]/);
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    line = _ref[_i];
    md = /(\d+\.\d+\.\d+\.\d+)\s+(.+)/.exec(line);
    if (md) {
      obj[md[1]] = _.union(obj[md[1]] || [], md[2].trim().split(/\s+/));
    }
  }
  return obj;
};

exports.get = function() {
  return get.apply(null, arguments);
};

exports.optimize = function() {
  var res;
  res = get.apply(null, arguments);
  if (res['127.0.0.1'] == null) {
    res['127.0.0.1'] = ['localhost'];
  }
  return res;
};

//# sourceMappingURL=main.js.map

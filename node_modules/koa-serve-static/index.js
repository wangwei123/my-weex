/*!
 * serve-static
 * Copyright(c) 2010 Sencha Inc.
 * Copyright(c) 2011 TJ Holowaychuk
 * Copyright(c) 2014 Douglas Christopher Wilson
 * Copyright(c) 2015 Fangdun Cai
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var thenify = require('thenify');
var originalServeStatic = require('serve-static');

/**
 * @param {String} root
 * @param {Object} options
 * @return {GeneratorFunction}
 * @api public
 */

module.exports = function serveStaticWrapper(root, options) {
  var middleware = thenify(originalServeStatic(root, options));

  return serveStatic;

  function* serveStatic(next) {
    try {
      // hacked statusCode
      this.res.statusCode = 200;
      // 404, serve-static forward non-404 errors
      var result = yield middleware(this.req, this.res);
      // hacked 404
      if (result === void 0) {
        var err = new Error();
        err.message = 'No such file or directory';
        err.status = 404;
        throw err;
      }
    } catch (e) {
      throw e;
    }
    yield next;
  }
}

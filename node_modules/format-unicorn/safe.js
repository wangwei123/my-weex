var formatUnicorn = require('./lib/format-unicorn')

module.exports = function () {
  var args = Array.prototype.slice.call(arguments)
  return formatUnicorn.apply(args.shift(), args)
}


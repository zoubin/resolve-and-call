var resolve = require('resolve');
var arrayify = require('arrayify-slice');
var caller = require('caller');
var path = require('path');

module.exports = function () {
  var args = arrayify(arguments);
  var opts;
  if (typeof args[0] === 'object') {
    opts = args.shift();
  }
  opts = opts || {};

  var fn = args.shift();
  var file;
  if (typeof fn === 'string') {
    file = fn;
    fn = require((opts.resolve || resolve.sync)(fn, {
      basedir: opts.basedir || path.dirname(caller()),
    }));
  }

  if (typeof fn !== 'function') {
    throw new Error(file
      ? 'Module ' + file + ' should export a function'
      : 'Should pass in a function, or path to a module exporting a function'
    );
  }
  return fn.apply(null, args);
};


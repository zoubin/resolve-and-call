import resolver from 'resolve';
import caller from 'caller';
import path from 'path';

export default function (...args) {
  if (Array.isArray(args[0])) {
    args = args[0];
  }
  let opts;
  if (typeof args[0] === 'object') {
    opts = args.shift();
  }
  opts = opts || {};
  let fn = args.shift();
  if (typeof fn === 'string') {
    fn = require((opts.resolve || resolver.sync)(fn, {
      basedir: opts.basedir || path.dirname(caller()),
    }));
  }
  return fn.apply(null, args);
}


var test = require('tap').test;
var call = require('..');

test('resolve and call', function(t) {
  t.equal(
    call({ basedir: __dirname }, 'add', 1, 2),
    3
  );
  t.equal(
    call('add', 1, 2),
    3
  );
  t.end();
});


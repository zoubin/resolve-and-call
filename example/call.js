var call = require('..');

console.log(
  'Expect: 3',
  '\n',
  'Actual: ',
  call('add', 1, 2)
);

console.log(
  'Expect: 1',
  '\n',
  'Actual: ',
  call({ basedir: __dirname + '/lib' }, './subtract', 2, 1)
);


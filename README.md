# resolve-and-call [![Travis Build Status][travis-img]][travis]
Resolve a module and call the function it exports.

## example

```
⌘ tree example/
example/
├── call.js
├── lib
│   └── subtract
│       └── index.js
└── node_modules
    └── add
        └── index.js
```

`call.js`:

```javascript
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

```

output:

```
⌘ node example/call.js
Expect: 3
 Actual:  3
Expect: 1
 Actual:  1
```

## res = call([opts, ]fn, arg,...)

### opts

Type: `Object`

Passed to [resolve](https://github.com/substack/node-resolve).

### fn

Type: `Function`, `String`

The function to be called.

If `String`, it will be resolved to the path of a module,
which exports the function to be called.

### args

All arguments that follow `fn` will be passed to `fn` when it is called.

### res

The result of calling `fn`.


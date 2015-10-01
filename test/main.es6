import test from 'tape';
import call from '../lib/main';
import resolve from 'resolve';

test('resolve and call', (t) => {
  t.equal(
    call({ basedir: __dirname }, 'add', 1, 2),
    3
  );
  t.equal(
    call([{ basedir: __dirname }, 'add', 1, 2]),
    3
  );
  t.equal(
    call('add', 1, 2),
    3
  );
  t.equal(
    call(require(
      resolve.sync('add', { basedir: __dirname })
    ), 1, 2),
    3
  );
  t.end();
});


import * as test from 'tape';
import { Apple } from './apple';

let idared = new Apple();

test('get an apple', (t) => {
  let actual: string = idared.getApple();
  let expected: string = 'apple';

  t.equal(actual, expected);
  t.end();
});

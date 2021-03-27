import *as test from 'tape';
import { Sum } from './sum';
import { Sum2 } from './sum';


test('sum of numbers', (t) => {
  let someNumbers = new Sum();
  let actual: number = someNumbers.sum([1, 2, 3, 4, 5]);
  let expected: number = 15;

  t.equal(actual, expected);
  t.end();
});

test('sum of two elements', (t) => {
  let twoNumbers = new Sum2();
  let actual: number = twoNumbers.sum2(5, 10);
  let expected: number = 15;

  t.equal(actual, expected);
  t.end();
});
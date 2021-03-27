/*We are going to represent our expenses in a list containing integers.

Create a list with the following items.
500, 1000, 1250, 175, 800 and 120
Create an application which solves the following problems.
How much did we spend?
Which was our greatest expense?
Which was our cheapest spending?
What was the average amount of our spendings?*/

let expenses: number[] = [500, 1000, 1250, 175, 800, 120];

//Money spent
let spentMoney: number = 0;
for (let i: number = 0; i < expenses.length; i++){
  spentMoney += expenses[i];
}
console.log('We spent' + spentMoney + 'HUF');

//Greatest expense
let greatestExpense: number = Math.max(...expenses);
console.log('Greatest expense cost' + greatestExpense + 'HUF');

//Cheapest expense
let cheapestExpense: number = Math.min(...expenses);
console.log('CHeapest expense cost' + cheapestExpense + 'HUF');

//Average spending
console.log('Average spending was ' + spentMoney / expenses.length + ' HUF');
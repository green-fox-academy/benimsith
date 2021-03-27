// Write a function called `sum()` that returns the sum of numbers from zero to the given parameter

function sum(parameter: number): number{
  let sum = 0;
  for (let i: number = 0; i <= parameter; i++){
     sum += i;
  }
  return sum;
}
  
console.log(sum(5));
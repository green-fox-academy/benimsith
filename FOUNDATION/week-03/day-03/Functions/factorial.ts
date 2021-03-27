// - Create a function called `calculateFactorial()`
//   that returns the factorial of its input

function calculateFactorial(input: number): number {
  let factorial = 1;
  for (let i: number = 1; i <= input; i++){
    factorial *= i;
  }
  return factorial;
  
}
console.log(calculateFactorial(5));
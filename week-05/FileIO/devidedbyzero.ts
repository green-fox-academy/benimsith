// Create a function that divides number 10
// by a number that's passed as a paramater and prints the result.
// It should print "fail" if the parameter is 0

function devidedByTen(parameter: number) {
  if (parameter === 0) {
    throw new Error('Don\'t devide by zero');
  }
  return 10 / parameter;
}
  
try {
  console.log(devidedByTen(0));
}
catch(e) {
  console.log(e.message);
}


//'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let toBeReversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;
console.log(reverse(toBeReversed));

function reverse(toBeReversed:string){
  let splitString = toBeReversed.split('');
  let reversedString = splitString.reverse();
  let newArray = splitString.join('');
  return newArray;
}
export = reverse;
'use strict';

let example: string = 'In a dishwasher far far away';
let changeable: string = 'dishwasher';

example = example.replace(changeable, 'galaxy');

// I would like to replace "dishwasher" with "galaxy" in this example variable, but it has a problem
// Please fix it for me!
// Expected ouput: In a galaxy far far away

console.log(example);

export = example;
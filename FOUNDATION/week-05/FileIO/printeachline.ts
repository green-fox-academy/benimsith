// Write a program that opens a file called "my-file.txt" and prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// it should print the following error message: "Unable to read file: my-file.txt"

declare function require(name: string);
//const fs = require('fs');


try {
  let readFile = fs.readFileSync('my-file.txt', 'utf8');
}
catch(e) {
  console.log('Unable to read file: my-file.txt');
}

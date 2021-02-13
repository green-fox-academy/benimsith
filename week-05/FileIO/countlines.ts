// Write a function that takes a filename as string as a parameter
// and returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

//let fs = require('fs');

function countLines(fileName: string) {
  try {
    let lines = fs.readFile(fileName, 'utf8');
    return console.log(lines.split('\n').length);
  }
  catch {
    console.log('zero');
  }
}
console.log(countLines('my-file.txt'));
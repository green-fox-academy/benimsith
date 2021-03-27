  
// Write a function that is able to manipulate a file
// by writing your name into it as a single line.
// The file should be named "my-file.txt".
// In case the program is unable to write the file,
// it should print the following error message: "Unable to write file: my-file.txt".

let fs = require('fs');
function writeName(fileName: string, line: string) {
  try {
    return fs.writeFileSync(fileName, line);
  }
  catch {
    let error = new Error(`Unable to write file: ${fileName}`);
    return console.log(error.message);
  }
}

console.log(writeName('my-file.txt', 'Beni'));
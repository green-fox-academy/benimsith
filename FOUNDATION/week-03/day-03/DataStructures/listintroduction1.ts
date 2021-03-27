let names: string[] = new Array;
console.log(names.length);
names.push('William');
if (names.length !== 0) {
  console.log('List is not empty');
} else {
  console.log('List is empty');
}
names.push('John', 'Amanda');
console.log(names);
console.log(names.length);
console.log(names[2]);
names.map(i => console.log(i));
names.splice(1, 1);
console.log(names);
names.reverse().map(i => console.log(names));
names.splice(0, names.length);
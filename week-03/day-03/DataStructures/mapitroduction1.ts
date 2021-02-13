let firstMap = {};
if (Object.keys(firstMap).length !== 0) {
  console.log('Map is not empty');
} else {
  console.log('Map is empty');
}
firstMap[97] = 'a';
firstMap[98] = 'b';
firstMap[99] = 'c';
firstMap[65] = 'A';
firstMap[66] = 'B';
firstMap[67] = 'C';
console.log(Object.keys(firstMap));
console.log(Object.values(firstMap));
firstMap[68] = 'D';
console.log(Object.keys(firstMap).length);
console.log(firstMap[99]);
delete firstMap[97];
console.log(firstMap);
console.log(firstMap.hasOwnProperty(100));
Object(firstMap).splice(0, Object(firstMap).length);

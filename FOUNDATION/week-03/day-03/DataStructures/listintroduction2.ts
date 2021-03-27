/*Create a list ('List A') which contains the following values
Apple, Avocado, Blueberries, Durian, Lychee
Create a new list ('List B') with the values of List A
Print out whether List A contains Durian or not
Remove Durian from List B
Add Kiwifruit to List A after the 4th element
Compare the size of List A and List B
Get the index of Avocado from List A
Get the index of Durian from List B
Add Passion Fruit and Pomelo to List B in a single statement
Print out the 3rd element from List A*/

let listA: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];
let listB: string[] = listA;
if (listA !== ['durian']) {
  console.log('List doesn\'t contain durian');
} else {
  console.log('List contains durian');
}
listB.splice(listB.indexOf('Durian'), 1);
console.log(listB);
listA.splice(5, 0, 'Kiwifruit');
console.log(listA);
if (listA.length > listB.length) {
  console.log('ListA is bigger');
} else {
  console.log('ListB is bigger');
}
listA.indexOf('Avocado');
listB.indexOf('Durian');
listB.push('Passion Fruit', 'Pomelo');
console.log(listA[2]);


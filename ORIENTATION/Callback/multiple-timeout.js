function printFruit( fruit,timeOut){
    setTimeout(() =>{
        console.log(fruit)
    },timeOut);
}

const apple = 'apple';
const pear = 'pear';
const melon = 'melon';
const grapes = 'grapes';

printFruit(apple,0);
printFruit(pear,1000);
printFruit(melone,3000);
printFruit(grapes,5000);
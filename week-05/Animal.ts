export class Animal{
     hunger: number;
     thirst: number;

    constructor() {
        this.hunger=50;
        this.thirst=50;
    }

    public eat(){
        this.hunger--;
        return this.hunger;
    }

    public drink(){
        this.thirst--;
        return this.thirst;
    }

    public play(){
        this.hunger++;
        this.thirst++;
        return this.hunger+this.thirst;
    }


    getHunger(): number {
        return this.hunger;
    }
}

let dog = new Animal();
let horse = new Animal();

dog.play();
dog.play();
horse.drink();
horse.drink();

console.log(dog);
console.log(horse);

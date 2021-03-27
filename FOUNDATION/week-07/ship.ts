import { Pirate } from './pirate';
class Ship { 
  name: string;
  crew: Pirate[];
  capitano: Pirate;
  numberOfAlivePirates: number;

  constructor(name:string) {
    this.name = name;
    
  }

  fillShip() {
    let pirates = [];
    let crewNumber = Math.floor((Math.random()+1)*6);
    for (let i: number = 0; i < crewNumber; i++){
      let pirate = new Pirate();
      if (i === 0) {
        pirate.capitano = true;
      }
    }
    this.crew = pirates;
    this.numberOfAlivePirates = this.crew.length;
  }
}
let blackPearl = new Ship('Black Pearl');
blackPearl.fillShip();
console.log(blackPearl);



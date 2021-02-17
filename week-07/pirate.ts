export class Pirate{
  intoxication: number;
  isAlive: boolean;
  passedOut: boolean;
  name: string;
  capitano: boolean;

  constructor() {
    this.intoxication = 0;
    this.isAlive = true;
    this.passedOut = false;
    this.name = this.name;
    this.capitano = false;

  }

  drinkSumRum() {
    if (this.isAlive === false) {
      this.deadPirate();
    } else {
      this.intoxication++;
    }
  }

  howsItGoingMate() {
    if (this.isAlive === false) {
      this.deadPirate();
    } else if (this.intoxication <= 4) {
      console.log('Pour me anudder!');
      this.intoxication += 1;
    } else {
      console.log('Arghh, I\'ma Pirate. How d\'ya d\'ink its goin?');
      this.passedOut = true;
    }
  }

  die() {
    this.isAlive = false;
  }
  
  deadPirate() {
    console.log('H\'s dead');
  }

  brawl(enemy: Pirate) {
    let option = Math.floor(Math.random() * 3+1);
    if (this.isAlive === false) {
      this.deadPirate();
    } else if (this.passedOut) {
      console.log('He\'s passed out');
    } else if (option === 1) {
      this.die();
    } else if (option === 2) {
      enemy.die();
    } else {
      this.die();
      enemy.die();
    }

  }
}

let Jack = new Pirate();
let John = new Pirate();
John.drinkSumRum();
John.drinkSumRum();


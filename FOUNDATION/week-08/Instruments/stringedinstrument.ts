import { Instrument } from './Instrument';

abstract class StringedInstrument extends Instrument {
  numberOfString: number;
  soundOfInstrument: string;
  sound(): string {
    return this.soundOfInstrument
  }

  play() {
    console.log(`${this.name}` + ' is a ' + `${this.numberOfString}` + ' -stringed instrument that goes ' + `${this.sound()}`);
  }
}


  export class ElectricGuitar extends StringedInstrument{
    constructor(numberOfString ?: number) {
      super();
      this.name = 'Electric Guitar';
      this.soundOfInstrument = 'Twang';
      if (numberOfString) {
        this.numberOfString = numberOfString;
      } else {
        this.numberOfString = 6;
      }
    }
 }

export class BassGuitar extends StringedInstrument{
  constructor(numberOfString?:number) {
    super();
    this.name = 'Bass Guitar';
    this.soundOfInstrument = 'Duum-duum-duum';
    if (numberOfString) {
      this.numberOfString = numberOfString;
    } else {
      this.numberOfString = 4;
    }
   }
}
 
export class Violin extends StringedInstrument{
  constructor(numberOfString?: number) {
    super();
    this.name = 'Violin';
    this.soundOfInstrument = 'Screech';
    if (numberOfString) {
      this.numberOfString = numberOfString;
    } else {
      this.numberOfString = 4;
    }
  }
}


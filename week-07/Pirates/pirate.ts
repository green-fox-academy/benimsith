class Pirate{
  name:string;
  intoxication:number;
  age: number;
  isAlive: boolean;
  passedOut: boolean;

  constructor(name:string, age:number, intoxication: number, isAlive: boolean, passedOut: boolean){
    this.name = name;
    this.age = age;
    this.intoxication = 0;
    this.isAlive = true;
    this.passedOut = false;
  }


  drinkSomeRum():void{
    if(this.isAlive = false){
      console.log("He's ded");
    }else{
    this.intoxication++;
    }
  }

  howsItGoingMate():void{
    if(this.isAlive = false){
      console.log("He's ded")
    }else if(this.intoxication < 4){
      console.log('Pour me anudder!');
    }else{
      console.log("Arghh, I'ma Pirate. How d'ya d'ink it's goin?");
      this.passedOut = true;
    } 
  }

  die():void{
    this.isAlive = false;
  }

  //brawl()

}
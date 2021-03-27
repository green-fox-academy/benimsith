export abstract class Animal{
  protected name: string;
  age: number;
  gender: string;
  weight: number;

  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  };

  breed();

  eat();

  drink();
}

class Mammal extends Animal{
  constructor(name:string) {
    super(name);
    
  }
}
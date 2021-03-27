import { Person } from './person'
export class Mentor extends Person{
  level: string;

  constructor(
    name: string = 'Jane Doe',
    age: number = 30,
    gender: string = 'female',
    level: string = 'intermediate',
  ){
    super(name, age, gender);
    this.level = level;
  }
  getGoal():void{
    console.log('My goal is: Educate brilliant junior software developers');
  }

  introduce():void{
    console.log(
      'Hi Im' + this.name + 'a' + this.age + 'year old' + this.gender + this.level + 'mentor.'
    )
  }

}
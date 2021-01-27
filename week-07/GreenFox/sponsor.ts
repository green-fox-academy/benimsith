import { Person } from './GreenFox/person';
export class Sponsor extends Person{
  company: string;
  hiredStudents: number;

  constructor(
    name: string = 'Jane Doe',
    age: number = 30,
    gender: string = 'female',
    company: string = 'Google',
    hiredStudents: number = 0,
  ){
    super(name, age, gender);
    this.company = company;
    this.hiredStudents = hiredStudents;
  }

  introduce():void{
    console.log(
      'Hi Im' + this.name + 'a' + this.age + 'year old' + this.gender + 'who represents' + this.company + 'and hired' + this.hiredStudents + 'students so far'
    );
  }

  hire():number{
    return this.hiredStudents++;
  }

  getGoal():void{
    console.log(
      'My goal is: Hire brilliant junior software developers'
    );
  }

}
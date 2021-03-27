class Student{
    learn(){
        console.log('Student is learning something new')
    }
    question(teacher:Teacher){
        teacher.answer();
    }
}

class Teacher{
    teach(student:Student){
        student.learn();
    }

    answer(){
        console.log('The teacher is answering the question');
    }
}
//PRACTICE ABOVE 4 files concepts

class Student{
    static count=0;

    constructor(name,grade){
        this.name=name;
        this.grade=grade;
        Student.count++;
    }

    introduce(){
        return `Hi I am ${this.name} and I am in grade ${this.grade}`;
    }

    get nameInUpperCase(){
        return this.name.toUpperCase();
    }

    static getTotalStudentCounts(){
        return Student.count;
    }
}


class GraduateStudent extends Student{
    constructor(name,grade,specialization){
        super(name,grade);
        this.specialization=specialization;
    }

    introduce(){
        return `Hi I am ${this.name} a graduate student in ${this.specialization}`;
    }
}


const s1 = new Student("Alice",10);
s1.introduce();
//getter function so can be accesed like a properties
console.log(s1.nameInUpperCase);//ALICE


const s2 = new GraduateStudent("Bob", 12, "Computer Science");
s2.introduce();
console.log(s2.nameInUpperCase);//BOB

console.log(`Total students: ${Student.getTotalStudentCounts()}`);//Total students: 2
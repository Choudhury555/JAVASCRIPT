// Static method to track object count

class Student{
    static count=0;
    
    constructor(name){
        this.name=name;
        Student.count++;
    }

    static totalCreated(){
        return `Total Students: ${Student.count}`;
    }
}

const s1 = new Student("Abhi");
const s2 = new Student("Ravi");

console.log(Student.totalCreated()); // "Total students: 2"
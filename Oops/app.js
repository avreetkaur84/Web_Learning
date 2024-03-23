// class Student {
//     constructor(name, age, marks) {
//         this.name = name;
//         this.age = age;
//         this.marks = marks;
//     }
//     talk() {
//         console.log(`Hi! I am ${this.name}`);
//     }
// }

// let stu1 = new Student("avreet", 19, 98);

// class Teacher {
//     constructor(name, age, subject) {
//         this.name = name;
//         this.age = age;
//         this.subject = subject;
//     }
//     talk() {
//         console.log(`Hi! I am ${this.name}`);
//     }
// }

// Rewriting the above by using Ineritance concept

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi! I am ${this.name}`);
    }
}

// extends keyword is used for inheriting the class
class Student extends Person {
    constructor(name, age, marks) {
        super(name, age);   //Parent class constructor is being called with the help of super
        this.marks = marks;
    }
}

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
}
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.getAge = function() {
  console.log(this.age);
};

function Student(id, name, age) {
  Person.call(this, name, age);
  this.id = id;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
// Object.defineProperty(Student.prototype, 'constructor', {
//   value: Student,
//   enumerable: false,
//   writable: true,
// });

// let student1 = new Student(1, 'Sarthak', 23);

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   getAge() {
//     console.log(this.age);
//   }

//   getAgeArrow = () => {
//     console.log(this.age);
//   };
// }

// let a = new Person("Sarthak", 23)

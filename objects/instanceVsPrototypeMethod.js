class Person {
  constructor(age) {
    this.age = age;
  }

  //instance property
  print = () => {
    console.log(this.age);
  }
}

class Employee extends Person {
  constructor(name, age) {
    super(age);
    this.name = name;
  }

  //prototype function
  print() {
    console.log(this.name, this.age)
  }
}

const one = new Person(23);

const two = new Employee("Sarthak", 23);


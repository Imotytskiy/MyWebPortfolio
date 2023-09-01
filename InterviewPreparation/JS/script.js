// SOLID

// Single Responsibility Principle
// Every class for one reponibility

class Book {
    constructor(title, author, content){
        this.title = title;
        this.author = author;
        this.content = content;
    }
}

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    sayHello() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  // Instantiate an object from the class
  const john = new Person('John', 30);
  
  // Call a method on the instance
  john.sayHello();
  console.log(john)
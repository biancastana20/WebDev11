// Person constructor
function Person(name, age) {
  this.name = name;
  // this.age = age;
  this.age = age;
  this.bio = function () {
    console.log("My name is " + this.name + " and I am " + this.age + " years old");
  }
}

const brad = new Person('Brad', 36);
const john = new Person('John', 30);
console.log(brad)
brad.bio();

// console.log(john.age);
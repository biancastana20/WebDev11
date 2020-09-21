//Object.prototype
//Person.prototype

// Person constructor
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

// Calculate age
Person.prototype.bio = function(){
  console.log("My name is " + this.firstName + " and I am " + this.age + " years old");
}

// Get full name
Person.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`;
}

// Gets Married
Person.prototype.getsMaried = function(newLastName){
  this.lastName = newLastName;
}

const john = new Person('John', 'Doe', 12);
const mary = new Person('Mary', 'Johnson', 15);

console.log(mary);

console.log(john.bio());

console.log(mary.getFullName());

mary.getsMaried('Smith');

console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('getFullName'));

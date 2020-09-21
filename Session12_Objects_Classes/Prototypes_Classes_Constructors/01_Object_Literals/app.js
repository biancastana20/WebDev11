const person = {
  firstName: "Steve",
  lastName: "Smith",
  age: 36,
  email: "steve@aol.com",
  hobbies: ["music", "sports"],
  address: {
    city: "Miami",
    state: "FL",
  },
  getBirthYear: function () {
    return 2020 - this.age;
  },
};

let val;

val = person;
// Get specific value
val = person.firstName;
val = person["lastName"];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
console.log(val);
val = person.address["city"];
val = person.getBirthYear();

var a = {
  name: "John",
  age: 30,
};
var b = {
  name: "Mike",
  age: 23,
};
var c = {
  name: "Nancy",
  age: 40,
};

const people = [a, b, c];
console.log(people);

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name, people[i].age);
}

// //LET;
// let name;
// name = "John Doe";
// console.log(name);
// name = "Steve Smith";
// console.log(name);

//CONST
// const name = "John";
// console.log(name);
// //Can not reassign
// name = "Sara";
// console.log(name); //error
// //Have to assign a value
//const greeting;

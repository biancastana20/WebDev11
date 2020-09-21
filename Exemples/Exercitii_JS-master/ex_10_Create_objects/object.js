// //Create an object
var person = {
    firstName: "Ciocodeica",
    lastName: "Andrei",
    id : 1234,
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }   
}

document.getElementById("demo").innerHTML = person.fullName();

function nume() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var age = document.getElementById("age").value;
    console.log(firstName);

    var output = document.getElementById("rezultat");
    output.innerHTML = "My name is " + firstName + " " + lastName + " and I have " + age + " years old.";
    
}


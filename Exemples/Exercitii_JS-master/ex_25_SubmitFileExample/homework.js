//Stilizare

//body
document.querySelector("body").style.maxWidth = "1000px";
document.querySelector("body").style.margin = "auto";
document.querySelector("body").style.fontFamily = "serif";
document.querySelector("body").style.marginTop = "60px";
//container
document.querySelector(".container").style.display = "flex";
document.querySelector(".container").style.backgroundColor = "#fed8b1";
//form
document.querySelector(".form").style.border = "1px solid #fed8b1";
document.querySelector(".form").style.borderRight = "none";
//inputs
//input_name
document.querySelector(".input_name").style.marginLeft = "50px";
document.querySelector(".input_name").style.padding = "20px";
//fname
document.querySelector("#fname").style.padding = "2px"
document.querySelector("#fname").style.width = "300px";
//lname
document.querySelector("#lname").style.padding = "2px"
document.querySelector("#lname").style.width = "300px";
//radio_gender
document.querySelector(".radio_gender").style.marginLeft = "70px";
//radio_buttons
document.querySelector("#male").style.marginLeft = "60px";
document.querySelector("#female").style.marginLeft = "60px";
//text area
document.querySelector(".message_submit").style.marginLeft = "70px";
document.querySelector(".message_submit").style.marginTop = "20px";
//button_submit
document.querySelector("#button_submit").style.marginLeft = "254px";
document.querySelector("#button_submit").style.marginTop = "30px";
document.querySelector("#button_submit").style.marginBottom = "20px";
document.querySelector("#button_submit").style.padding = "5px";
document.querySelector("#button_submit").style.backgroundColor = "#87cefa";
document.querySelector("#button_submit").style.color = "#fff";
document.querySelector("#button_submit").style.borderRadius = "5px";
//image
document.querySelector(".image").style.flex = "1";
document.querySelector(".image").style.border = "1px solid #fed8b1";
document.querySelector(".image").style.borderLeft = "none";
document.querySelector(".image").style.padding = "20px";
document.querySelector(".image").style.paddingLeft = "40px";
// document.querySelector("#picture").style.width = "500px";
// document.querySelector("#picture").style.height = "400px";

//onsubmit

document.getElementById("button_submit").addEventListener("click", validateForm);

function validateForm() {
    var x = document.getElementById("fname").value;
    var y = document.getElementById("lname").value;
    
    if (x == "") {
        document.getElementById("fname").style.borderColor = "red";
        return false;
    }
    if (x != "") {
        document.getElementById("fname").style.border = "1px solid black";
    }
    if (y == "") {
        document.getElementById("lname").style.borderColor = "red";
        return false;
    } 
    if (y != "") {
        document.getElementById("lname").style.border = "1px solid black";
    }       
    if(x != "" && y != "") {
        var newItem = document.createElement("h3");
        var textnode = document.createTextNode("Thank you for contacting us, " + x);
        newItem.appendChild(textnode);
        var a = document.querySelector("body");
        a.insertBefore(newItem, a.childNodes[0]);
        newItem.style.backgroundColor = "#98fb98";
        newItem.style.borderRadius = "5px";
        newItem.style.color = "#006400";
        newItem.style.padding = "10px";

        var newItem2 = document.createElement("i");
        newItem.insertBefore(newItem2, newItem.childNodes[0]);
        newItem2.className = "fas fa-check-circle";

        var newItem3 = document.createElement("i");
        newItem.appendChild(newItem3);
        newItem3.className = "fas fa-times";
        newItem3.style.float = "right";
        
    }
    console.log(x + " " + y);
}





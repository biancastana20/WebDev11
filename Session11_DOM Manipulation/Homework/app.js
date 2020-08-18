
var out = document.getElementById("resultform")
var y = document.querySelector(".hidebanner")

var button = document.getElementById("btn1")
button.addEventListener('click', myFunction)


function myFunction(){
    var fnam= document.getElementById('fname')
    var lnam = document.getElementById('lname')
  
    if (fname.value == "") {
        fnam.style.borderColor = "red";   
        y.style.visibility = "hidden" 
    }
    else if (lname.value == ""){
        lnam.style.borderColor = "red";
        y.style.visibility = "hidden" 
      
    }     
    else {
        fnam.style.borderColor = "black";
        lnam.style.borderColor = "black";
        y.style.visibility = "visible" 
        out.innerHTML="Thank you for contacting us, " + " " +fname.value
        }

        button.classList.add('blue')
     document.getElementById("myForm").reset();
    //var gender = document.getElementsByName('gender');
    // var gender_value;
    // for(var i = 0; i < gender.length; i++){
    //      //console.log(gender[i].checked)
    //     if(gender[i].checked){
    //         gender_value = gender[i].value;
    //     }  
    // }
     //console.log(gender_value)
    
    //display all outputs from the form in console 
    var results = document.querySelectorAll("input")
     // console.log(results)
     for (var i= 0; i < results.length; i++){
         if (results[i].type == "radio") {
             if (results[i].checked){
                console.log(results[i].value)  
             }
    } else {
        console.log(results[i].value)
    }

 }
     var textare = document.getElementById("textare")
     console.log(textare.value)

     
    }

   
  
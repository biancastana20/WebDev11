
var out = document.getElementById("addfname") // var out for adding fname to banner after submitt
var y = document.querySelector(".hidebanner") //var y for banner witch is hide initially 
var gendererror = document.getElementById("gendererror")
var fname = document.getElementById('fname')
var lname = document.getElementById('lname')
var gender = document.getElementsByName("gender")
var gendererror = document.getElementById("gendererror")
// add event to button
var button = document.getElementById("btn1")
button.addEventListener('click', myFunction)


// onblur = "blurEvent('fname')"
// var el = document.getElementById('fname')
// el.addEventListener('onblur', blurEvent('fname'))
// onblur = "blurEvent('lname')"
// var el = document.getElementById('lname')
// el.addEventListener('onblur', blurEvent('lname'))
//
function blurEvent(elementId) {
    var el = document.getElementById(elementId)
    if (el.value) {
        el.classList.remove('red')
        el.classList.add('black')
    }
}
function focusRadio() {
    // var gender = document.getElementsByName("gender")
    if (gender[0].value || gender[1].value) {
        gendererror.innerHTML = ''
    }
}

function myFunction() {
    
    
    //to keep in red all the field aren't completed add a var that check 
    var valid = true;

    if (fname.value == "") {
        // fname.style.borderColor = " red";
        // fname.classList.remove('black')
        fname.classList.add('red')
        y.style.visibility = "hidden"
        valid = false;
    }
    if (lname.value == "") {
        // lname.style.borderColor = "red";
        // lname.classList.remove('black')
        lname.classList.add('red')
        y.style.visibility = "hidden"
        valid = false;
    }

    if (!(gender[0].checked || gender[1].checked)) {
        gendererror.innerHTML = "Please add gender!"
        gendererror.style.color = "red"
        valid = false;
    }

    if (valid) {
        // console.log(results)
        var results = document.querySelectorAll("input")
        for (var i = 0; i < results.length; i++) {
            if (results[i].type == "radio") {  //if input is radio
                if (results[i].checked) {  //if is checked
                    console.log(results[i].value)
                }
            } else {
                console.log(results[i].value)
            }
        }
        var textare = document.getElementById("textare")
        console.log(textare.value)
        // end console results

        // reset form and validation 
        // fname.classList.remove('red')
        // lname.classList.remove('red')
        // gendererror.innerHTML = " ";
        y.style.visibility = "visible"
        out.innerHTML = "Thank you for contacting us, " + " " + fname.value
        button.classList.add('blue')
        document.getElementById("myForm").reset();
        // end reset
    } else {
        
        return;
    }
}

    // var gender = document.getElementsByName('gender');
    // var gender_value;
    // for(var i = 0; i < gender.length; i++){
    //      //console.log(gender[i].checked)
    //     if(gender[i].checked){
    //         gender_value = gender[i].value;
    //     }  
    // }
    //  console.log(gender_value)

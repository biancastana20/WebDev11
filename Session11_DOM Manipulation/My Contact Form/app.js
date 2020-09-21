
//declaration for vars
var out = document.getElementById("addfname") // var out for adding fname to banner after submitt
var y = document.querySelector(".hidebanner") //var y for banner witch is hide initially 
var gendererror = document.getElementById("gendererror")
var gender = document.getElementsByName("gender")
var gendererror = document.getElementById("gendererror")

// add event onclick to button
var button = document.getElementById("btn1")
button.addEventListener('click', myFunction)


//add event onblur to fname and lname input
var fname = document.getElementById('fname')
fname.addEventListener('blur', blurEvent)
var lname = document.getElementById('lname')
lname.addEventListener('blur', blurEvent)


function blurEvent() {
    if (fname.value) {
        fname.classList.remove('red')
    }
    if (lname.value) {
        lname.classList.remove('red')
    }  
}
// event onfocus for gender when user complete one of the button
function focusRadio() {
    if (gender[0].value || gender[1].value) {
        gendererror.innerHTML = ''
    }
}

//validation of the form
function myFunction() {
    
    if (fname.value == "") {
        fname.classList.add('red')
        y.style.visibility = "hidden"
    }
    else if (lname.value == "") {
        lname.classList.add('red')
        y.style.visibility = "hidden"   
    }

    else if (!(gender[0].checked || gender[1].checked)) {
        gendererror.innerHTML = "Please add gender!"
        gendererror.style.color = "red"
    }

     else  {
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

        y.style.visibility = "visible"
        out.innerHTML = "Thank you for contacting us, " + " " + fname.value
        button.classList.add('blue')
        document.getElementById("myForm").reset();
        // end reset
    } 
    
}

  
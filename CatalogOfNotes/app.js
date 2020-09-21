const input= document.getElementById("input")
console.log(input)
const buttonAdd = document.querySelector(".buttonAdd")
const hiddenGrades = document.querySelector(".notes_students_wrappers")

buttonAdd.addEventListener("click", addItem)
const tableStudents = document.getElementById("tableStudents")


//when the input is filled border will turn in black

function blurEvent() {
    if (input.value) {
        input.classList.remove("red")
    }
}

function addItem () {
    // verify the input to be fill
     if (input.value =="") {
         input.classList.add=("red")
         return
     }
     //build the table
    var row = tableStudents.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
     //add value to cells
    cell1.innerHTML = input.value;
    cell3.innerHTML = '<button >Show/Add grades</button>'
    cell3.addEventListener('click', showGrades)
    cell4.innerHTML = '<button >X</button>'

   
    
    tableStudents.style.visibility="visible"
    input.value= ""
     //console.log(table)  

  
 }
 
 function showGrades() {
    hiddenGrades.style.visibility="visible"
    var studentName = document.getElementById("studentName")
    studentName.innerHTML =  input.value
      }
const input = document.getElementById("additem")
const table = document.getElementById("myTable")

const buttonAdd = document.getElementById("buttonAdd")
buttonAdd.addEventListener("click", addItem)


//when the input is filled border will turn in black

function blurEvent() {
    if (input.value) {
        input.classList.remove("red")
    }
}

//add table rows
function addItem () {
   // verify the input to be fill
    if (input.value =="") {
        input.classList.add("red")
        return
    }
    //build the table
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    //add value to cells
    cell1.innerHTML = input.value;
    cell2.innerHTML = '<button class ="buttonMarkAsBuyed">Mark as buyed/unbuyed</button>'
    
    cell2.addEventListener('click', strikethrough)
    var hiddenPart = document.getElementById("myTable")
    hiddenPart.style.visibility="visible"
    input.value= ""
    //console.log(table)  
}

 //strike the content when the mark button is pressed
function strikethrough (){
        for (var i = 1; i< table.rows.length; i++){
            table.rows[i].onclick = function (){
              //get the selected row index
               rIndex= this.rowIndex;
               //console.log(rIndex)
               //get the cell from selected rInde
               table.rows[rIndex].cells[0].classList.toggle("stroke")
            };   
     }
    }

const buttonSortAsc = document.querySelector(".buttonSortAsc")
buttonSortAsc.addEventListener ("click", sortTableAsc) 


 // ascending order for list
 function sortTableAsc() {
        var rows, switching, i, x, y, shouldSwitch;
        var switching = true;
        /* Make a loop that will continue until  no switching has been done: */
       
        while (switching == true) { // while switching is true --> execute the next code until switching is false
          // Start by saying: no switching is done:
          switching = false;
          var rows = table.rows;
          /* Loop through all table rows (except the first, which contains table headers): */
          for (i = 1; i < (rows.length-1); i++) {
            // Start by saying there should be no switching:
            var shouldSwitch = false;
            /* Get the two elements you want to compare,one from current row and one from the next: */
            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i + 1].getElementsByTagName("TD")[0];
           // console.log(x)
           //console.log(y)
            // Check if the two rows should switch place:
            if (x.innerHTML > y.innerHTML) {
              // If so, mark as a switch and break the loop:
              shouldSwitch = true;
              break;
            }
          }
          if (shouldSwitch == true) {
            /* If a switch has been marked, make the switch  and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
          }
        }
    }

// descending order for list
const buttonSortDesc = document.querySelector(".buttonSortDesc")
buttonSortDesc.addEventListener ("click", sortTableDesc)

   function sortTableDesc() {
        var rows, switching, i, x, y, shouldSwitch;
 
         switching = true;
    
         while (switching == true) {
           switching = false;
           rows = table.rows;
           for (i = 1; i < (rows.length - 1); i++) {
             shouldSwitch = false;
             x = rows[i].getElementsByTagName("TD")[0];
             y = rows[i + 1].getElementsByTagName("TD")[0];
             
             if (x.innerHTML < y.innerHTML) {
               shouldSwitch = true;
               break;
             }
           }
           if (shouldSwitch == true) {
             rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
             switching = true;
           }
         }
       }
  //enter event 
  input.addEventListener("keyup", eventEnter)
  function eventEnter (event){
  //add red border 
    if (input.value =="") {
        input.classList.add("red")
        return
    }
    blurEvent()
      
    if (event.keyCode === 13 ) { //key of 13 is enter in keyboard
          // event.preventDefault (); //cancel default action of enter key
          document.getElementById("buttonAdd").click()
      }
     
    }
    
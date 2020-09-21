const table = document.querySelector(".myTable");
const item = document.getElementById("text").value;

document.getElementById("button").addEventListener("click", addItems);
function addItems(){
    if(!checkEmptyInput()){
        var item = document.getElementById("text").value;
        var row = document.createElement("tr");
        var cell1 = document.createElement("td");
        var cell2 = document.createElement("td");
        var buttonChecked = document.createElement("button");
            buttonChecked.setAttribute("onclick", "markAsBuyed();");
            buttonChecked.className = "buttonChecked";
        var textB = document.createTextNode("Mark as buyed");

        table.appendChild(row);
            row.appendChild(cell1);
                cell1.innerHTML = item;
            row.appendChild(cell2);
                cell2.appendChild(buttonChecked);
                    buttonChecked.appendChild(textB);

        //stilizare
        document.getElementById("hidden").style.visibility = "visible";
        buttonChecked.style.backgroundColor = "#c47466";
        buttonChecked.style.borderRadius = "5px";
        buttonChecked.style.marginLeft = "50px";

        ClearFields();            
    }
}

document.getElementById("sortare_asc").addEventListener("click", sortTableAsc);
function sortTableAsc() {
    var rows, switching, x, y, shouldSwitch;
    switching = true;
    /* Make a loop that will continue until no switching has been done: */
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /* Loop through all table rows (except the first, which contains table headers): */
        for (var i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Get the two elements you want to compare, one from current row and one from the next: */
            x = rows[i].getElementsByTagName("td")[0];
            y = rows[i + 1].getElementsByTagName("td")[0];
            // Check if the two rows should switch place:
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                // If so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
        /* If a switch has been marked, make the switch and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        }
    }
}

document.getElementById("sortare_desc").addEventListener("click", sortTableDesc);
function sortTableDesc(){
    var rows, switching, x, y, shouldSwitch;
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (var i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[0];
            y = rows[i + 1].getElementsByTagName("td")[0];
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) { //descendent
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        }
    }
}

function markAsBuyed(){ //event "onclick" pentru butonul "marked as buyed"
    var rIndex = document.querySelector(".myTable");
    for(var i = 1; i < table.rows.length; i++){
        table.rows[i].onclick = function(){
            // get the selected row index
            rIndex = this.rowIndex;
            var x = this.cells[0];
            // x.style.textDecoration = "line-through"; //strikethrough 
            x.classList.toggle("strikethrough"); 
        };
    }   
}

function ClearFields(){
    document.getElementById("text").value = "";
}

//apasarea tastei enter
document.getElementById("text").addEventListener("keyup", function(e){
    if(e.keyCode === 13){
        document.getElementById("button").click();
    }
});  

//verificarea inputului sa nu fie gol
function checkEmptyInput(){
    var isEmpty = false;
    var item = document.getElementById("text").value;

    if(item === ""){
        alert("write an item!!");
        document.getElementById("text").focus(); //dupa alerta sa faca focus pe input
        isEmpty = true;
    }
    return isEmpty;
}



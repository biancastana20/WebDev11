const table = document.getElementById("myTable");

document.getElementById("addElev").addEventListener("click", addStudents);
function addStudents(){
    var newStudent = document.getElementById("text").value;
    var row = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");
    var veziAdaugaNote = document.createElement("button");
        veziAdaugaNote.setAttribute("onclick", "veziSauAdaugaNote();");
    var text1 = document.createTextNode("Vezi / Adauga note");
    var stergeStudent = document.createElement("button");
        stergeStudent.setAttribute("onclick", "deleteStudent(this);");
    var text2 = document.createTextNode("x");

    table.appendChild(row);
        row.appendChild(cell1);
            cell1.innerHTML = newStudent;
        row.appendChild(cell2);
            cell2.setAttribute("id", "medieNote");
        row.appendChild(cell3);
            cell3.appendChild(veziAdaugaNote);
                veziAdaugaNote.appendChild(text1);
        row.appendChild(cell4);
            cell4.appendChild(stergeStudent)        
               stergeStudent.appendChild(text2);

    //stilizare
    // table.style.visibility = "visible";
    // document.getElementById("th1").style.visibility = "visible";
    // document.getElementById("th2").style.visibility = "visible";
    // document.getElementById("th3").style.visibility = "visible";
    // document.getElementById("th4").style.visibility = "visible";
    cell1.style.border = "2px solid purple";
    cell2.style.border = "2px solid purple";
    cell3.style.border = "2px solid purple";
    cell4.style.border = "2px solid purple";
    veziAdaugaNote.style.width = "200px";
    stergeStudent.style.width = "70px";
    stergeStudent.style.color = "red";

    ClearFieldsName();
}        

//apasarea tastei enter pentru nume
document.getElementById("text").addEventListener("keyup", function(e){
    if(e.keyCode === 13){
        document.getElementById("addElev").click();
    }
});  

// apasarea "veziAdaugaNote"
function veziSauAdaugaNote(){
    var x = document.getElementById("note_elev_wrapper");
    x.style.visibility = "visible";
    //pentru afisarea numelui studentului selectat
    var rIndex = document.getElementById("myTable");
    for(var i = 1; i < table.rows.length; i++){
        table.rows[i].onclick = function(){
            // get the selected row index
            rIndex = this.rowIndex;
            var x = this.cells[0];
            document.getElementById("studentSelectat").innerHTML = x.innerHTML;  
        };
    } 
    
    //pentru a sterge notele adaugate
    for(var i = document.getElementById("tableNote").rows.length; i > 1; i--){
        document.getElementById("tableNote").deleteRow(i - 1);
    }
}

//apasarea "ascunde notele"
document.getElementById("ascundeNote").addEventListener("click", ascundeNotele);
function ascundeNotele(){
    var y = document.getElementById("note_elev_wrapper");
    y.style.visibility = "hidden";

    //pentru a sterge notele adaugate
    for(var i = document.getElementById("tableNote").rows.length; i > 1; i--){
        document.getElementById("tableNote").deleteRow(i - 1);
    }

}

//button "adauga nota studentului"
document.getElementById("addNota").addEventListener("click", addNewNote);
function addNewNote(){
    var nota = document.getElementById("nota").value;
    var tableNote = document.getElementById("tableNote");
    var row = document.createElement("tr");
    var cell5 = document.createElement("td");
    var cell6 = document.createElement("td");
    var stergeNota = document.createElement("button");
        stergeNota.setAttribute("onclick", "deleteNota(this);")
    var text3 = document.createTextNode("x");


    tableNote.appendChild(row);
        row.appendChild(cell5);
            cell5.innerHTML = nota;
        row.appendChild(cell6);
            cell6.appendChild(stergeNota);
                stergeNota.appendChild(text3);

    //stilizare
    cell5.style.border = "2px solid purple";
    cell6.style.border = "2px solid purple";
    stergeNota.style.color = "red";
    ClearFieldsNota();  

    //average de notele introduse 
    var sumVal = 0, rowCount = tableNote.rows.length - 1;
    for(var i = 1; i < tableNote.rows.length; i++){
        sumVal = sumVal + parseInt(tableNote.rows[i].cells[0].innerHTML);
        for(var j = 1; j < table.rows.length; j++){
            var z = table.rows[j].cells[1];
        } 
    }
    z.innerHTML = sumVal / rowCount;
}

function ClearFieldsName(){
    document.getElementById("text").value = "";
}

function ClearFieldsNota(){
    document.getElementById("nota").value = "";
}

//apasarea tastei enter pentru nota
document.getElementById("nota").addEventListener("keyup", function(e){
    if(e.keyCode === 13){
        document.getElementById("addNota").click();
    }
});  

function deleteStudent(x){
    //delete the row I click on
    var n = x.parentNode.parentNode.rowIndex; //indexul randului table > tr > td
    table.deleteRow(n);
}

function deleteNota(x){
    var tableNote = document.getElementById("tableNote");
    var n = x.parentNode.parentNode.rowIndex;
    tableNote.deleteRow(n);
}

// functiile sorteaza MEDIE
document.getElementById("sortCresc").addEventListener("click", sortCrescMedie);
function sortCrescMedie(){
    var rows, switching, x, y, shouldSwitch;
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (var i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[1];
            y = rows[i + 1].getElementsByTagName("td")[1];
            if (parseInt(x.innerHTML) > parseInt(y.innerHTML)) { //ascendent
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

document.getElementById("sortDescresc").addEventListener("click", sortDescMedie);
function sortDescMedie(){
    var rows, switching, x, y, shouldSwitch;
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (var i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[1];
            y = rows[i + 1].getElementsByTagName("td")[1];
            if (parseInt(x.innerHTML) < parseInt(y.innerHTML)) { //descendent
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

// functiile sorteaza NOTA
document.getElementById("sortCrescNota").addEventListener("click", sortCrescNota);
function sortCrescNota(){
    var tableNote = document.getElementById("tableNote");
    var rows, switching, x, y, shouldSwitch;
    switching = true;
    while (switching) {
        switching = false;
        rows = tableNote.rows;
        for (var i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[0];
            y = rows[i + 1].getElementsByTagName("td")[0];
            if (parseInt(x.innerHTML) > parseInt(y.innerHTML)) { //ascendent
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

document.getElementById("sortDescrescNota").addEventListener("click", sortDescNota);
function sortDescNota(){
    var tableNote = document.getElementById("tableNote");
    var rows, switching, x, y, shouldSwitch;
    switching = true;
    while (switching) {
        switching = false;
        rows = tableNote.rows;
        for (var i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[0];
            y = rows[i + 1].getElementsByTagName("td")[0];
            if (parseInt(x.innerHTML) < parseInt(y.innerHTML)) { //descendent
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

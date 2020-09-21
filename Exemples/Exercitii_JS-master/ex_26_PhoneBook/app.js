document.getElementById("buton").addEventListener("click", adaugaContact);

function checkEmptyInput(){ //check for empty inputs
    var isEmpty = false;
    var nume = document.getElementById("nume").value;
    var telefon = document.getElementById("telefon").value;

    if(nume === ""){
        alert("Write a name!!");
        document.getElementById("nume").focus();
        isEmpty = true;
    }
    if(telefon === ""){
        alert("Write a telephone number!!!");
        document.getElementById("telefon").focus();
        isEmpty = true;
    }
    return isEmpty;
}

function adaugaContact(){
    if(!checkEmptyInput()){
        var nume = document.getElementById("nume").value;
        var telefon = document.getElementById("telefon").value;
        var table = document.querySelector(".my_table");
        var tableRow2 = document.createElement("tr");
        var cell1 = document.createElement("td");
        var cell2 = document.createElement("td");
        var cell3 = document.createElement("td");
        var cell4 = document.createElement("td");
        var link1 = document.createElement("a");
        var link2 = document.createElement("a");
        var textNode23 = document.createTextNode("Modifica");
        var textNode24 = document.createTextNode("Sterge");

        table.appendChild(tableRow2);//creat row 2
            tableRow2.className = "delRow";
            tableRow2.appendChild(cell1);//insert table cell 1
                cell1.innerHTML = nume; //atribuire input nume
                cell1.setAttribute("id", "modificaNume");
            tableRow2.appendChild(cell2);//insert table cell 2
                cell2.innerHTML = telefon; //atribuire input telefon
                cell2.setAttribute("id", "modificaTelefon");
            tableRow2.appendChild(cell3);//insert table cell 3
                cell3.appendChild(link1);//isert a
                link1.appendChild(textNode23);//atribuire text
                link1.setAttribute("onclick", "selectedRowToinput();");//link
            tableRow2.appendChild(cell4);//insert table cell 4
                cell4.appendChild(link2);//isert a
                link2.appendChild(textNode24);//atribuire text
                link2.setAttribute("onclick", "stergeContact(this);");//link

        //stilizare
        cell1.style.textAlign = "center";
        cell2.style.textAlign = "center";
        link1.style.color = "blue";
        link2.style.color = "blue";
        link1.style.textDecoration = "underline";
        link2.style.textDecoration = "underline";
        link1.style.cursor = "pointer";
        link2.style.cursor = "pointer";
        table.style.visibility = "visible"; //sa apara capul de tabel
        document.querySelector(".zona2").style.backgroundColor = "rgb(236, 195, 91)";
        document.querySelector(".zona2").style.padding = "30px";
        document.querySelector(".zona2").style.borderRadius = "10px";

        ClearFields();
    }
}

//display selected row data into input text
function selectedRowToinput(){ ///pt link Modifica
    var rIndex, table = document.querySelector(".my_table"); 
    for(var i = 1; i < table.rows.length; i++){
        table.rows[i].onclick = function(){
            // get the selected row index
            rIndex = this.rowIndex;
            document.getElementById("nume").value = this.cells[0].innerHTML;
            document.getElementById("telefon").value = this.cells[1].innerHTML;
        };
    }   
    document.getElementById("buton").removeEventListener("click", adaugaContact);//remove functiei principale 
    document.getElementById("buton").addEventListener("click", modificaContact);//add functiei de edit

    function modificaContact(){ //pt butonul ADD Contact
        if(!checkEmptyInput()){
            table.rows[rIndex].cells[0].innerHTML = document.getElementById("nume").value;
            table.rows[rIndex].cells[1].innerHTML = document.getElementById("telefon").value;
        }
        
        ClearFields();
        document.getElementById("buton").removeEventListener("click", modificaContact);
        document.getElementById("buton").addEventListener("click", adaugaContact);
    } 
}

function stergeContact(x){
    var table = document.querySelector(".my_table");
    var n = x.parentNode.parentNode.rowIndex; //indexul randului table > td > tr
    table.deleteRow(n);

    ClearFields();
} 

function ClearFields() {
    document.getElementById("nume").value = "";
    document.getElementById("telefon").value = "";
}

//pentru tasta enter in input "telefon"
var input = document.getElementById("telefon");
input.addEventListener('keyup', function(event){
    if(event.keyCode === 13){   //nr 13 este tasta enter pe tastatura!!!
        event.preventDefault(); //cancel default action of enter
        document.getElementById("buton").click();
    }
});
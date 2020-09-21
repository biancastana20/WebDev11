document.getElementById("button").addEventListener("click", defangIPAddr);

function defangIPAddr(){
    var address = document.getElementById("IP_Address").value; //citim adresa de la tastatura
    var defAddr = "";

    for(char of address){
        if(char === "."){
            defAddr += "[.]";
        }
        else{
            defAddr += char;
        }
    }
    document.getElementById("rezultat").innerHTML = defAddr;
}

//input mask bundle ip address
var ipv4_address = $('#IP_Address');

ipv4_address.inputmask({
    alias: "ip",
    greedy: false //The initial mask shown will be "" instead of "-____".
});
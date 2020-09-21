const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat'); //ia toate div cu class seat din row
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = Number(movieSelect.value); //initial este valoarea din movie selector

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    console.log(selectedSeats)
    count.innerHTML = selectedSeats.length; //length e nr de sacune selectate
    total.innerHTML = selectedSeats.length * ticketPrice;
}

movieSelect.addEventListener('change', function (e) {
    ticketPrice = Number(e.target.value); //sch ticket price de fiecare data cand schimbam filmul/pretul
    console.log(ticketPrice);
    // console.log(e) //Event {isTrusted: true, type: "change", target: select#movie, currentTarget: select#movie, eventPhase: 2, …}
    // console.log(e.target) //<select id ="movie> ...</select>"
    // console.log(e.type) // change
    updateSelectedCount();
});
//console.log(movieSelect) //<select id ="movie> ...</select>"

container.addEventListener('click', function (e) { //e este evenimentul de click=>facem un eventlistener care pune un eveniment onclick
    console.log(e) //MouseEvent {isTrusted: true, screenX: 292, screenY: 281, clientX: 292, clientY: 179, …}
    console.log(e.target) // <div class ="seat"></div>
    console.log(e.type) //click
    if (e.target.classList.contains('seat') && //eventul merge doar cand dam click pe seat
        !e.target.classList.contains('occupied')) //si daca nu e ocupat
    {
        e.target.classList.toggle('selected'); //daca apas din nou pe scaunul ocupat care e verde se face la loc gri (neocupat)
    }
    updateSelectedCount();

});
//console.log (container) //<div class = "container">...</div>
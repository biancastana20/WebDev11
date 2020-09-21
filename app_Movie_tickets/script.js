const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = Number(movieSelect.value);

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    
    count.innerHTML =  selectedSeats.length;
    total.innerHTML =  selectedSeats.length * ticketPrice;
}

movieSelect.addEventListener('change', function(e){
    ticketPrice = Number(e.target.value);
    console.log(ticketPrice);
    updateSelectedCount();
});

container.addEventListener('click', function(e){
    if(e.target.classList.contains('seat') &&
      !e.target.classList.contains('occupied'))
    {
        e.target.classList.toggle('selected');
    }
    updateSelectedCount();
});


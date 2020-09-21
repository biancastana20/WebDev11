var clearBtn = document.querySelector('.clear-tasks');
var card = document.querySelector('.card');
var heading = document.querySelector('h5');

// Click
clearBtn.addEventListener('click', runEvent);
// Doubleclick
// clearBtn.addEventListener('dblclick', runEvent);
// Mousedown
// clearBtn.addEventListener('mousedown', runEvent);
// Mouseup
// clearBtn.addEventListener('mouseup', runEvent);
// Mouseenter
// card.addEventListener('mouseenter', runEvent);
// Mouseleave
// card.addEventListener('mouseleave', runEvent);
// Mouseover
// card.addEventListener('mouseover', runEvent);
// Mouseout
// card.addEventListener('mouseout', runEvent);
// Mousemove
card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  document.body.style.backgroundColor = 'red';

  // heading.textContent= `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
  // document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}
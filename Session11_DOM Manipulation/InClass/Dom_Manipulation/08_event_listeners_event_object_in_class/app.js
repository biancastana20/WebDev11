document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  console.log('Clicked');

  var val;

  val = e;

  // Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  // // Event type
  val = e.type;

  // // Timestamp
  val = e.timeStamp;

  console.log(val);
}
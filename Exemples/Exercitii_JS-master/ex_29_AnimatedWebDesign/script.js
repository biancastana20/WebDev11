let circles = document.getElementById('circles');
let btn = document.querySelector('.btn');
let furtherDetail = document.querySelector('.further-detail');
let triangle = document.querySelector('.triangle');

//loop for generating 16 circles
for(let i = 1; i <= 22; i++) {
    //size variable stores the size of the circle. Here i use ternary(conditional) operator 
    let size = i % 2 === 0 ? `${i + 1 + '50'}` : `${i + 1}50`; //if (i % 2 === 0) then this (${i + 1 + '50'}) condition execute. Otherwise this (${i + 1}50) condition execute.

    //margin variable stores the margin of the circle. We use this to center the circle.
    let margin = -(size / 2);

    //animation variable stores the css animation value on the basis of this(i % 2 === 0) condition
    let animation = i % 2 === 0 ? "rotate-1 3s linear infinite" : "rotate-2 3s linear infinite";

    //box shadow variable stores the css box shadow value on the basis of this (i % 2 === 0) condition.
    let boxShadow = i % 2 === 0 ? "inset 0.1rem 0.2rem 0.6rem rgba(79, 193, 233, 0.99)" : "inset 0.1rem 0.2rem 0.6rem rgba(255, 165, 0, 0.99)";

    //here we create a new div element.
    let circle = document.createElement('div');

    //add circle class to the div element
    circle.classList.add('circle');

    //set style attribte to the div element
    circle.setAttribute("style", `width: ${size}px; height: ${size}px; z-index: -${i}; margin: ${margin}px; animation: ${animation}; box-shadow: ${boxShadow}`);

    //append the div with circles div(we create this circle div in html file).
    circles.appendChild(circle);
}

btn.addEventListener('click', function() {
    furtherDetail.classList.toggle('further-detail-toggle');
    triangle.classList.toggle('triangle-toggle');
});

triangle.addEventListener('click', function() {
    furtherDetail.classList.toggle('further-detail-toggle');
    triangle.classList.toggle('triangle-toggle');
});

//conditional (ternary) operator - 3 operands:
// - a condition followed by a question mark (?)
// - an expression to execute if the condition is truthy followed by a colon (:)
// - expression to execute if the condition is falsy
//This operator is frequently used as a shortcut for the if statement.
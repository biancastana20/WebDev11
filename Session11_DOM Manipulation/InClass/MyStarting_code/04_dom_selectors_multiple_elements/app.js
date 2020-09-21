var oddLis =  document.querySelectorAll('li:nth-child(odd)');
console.log(oddLis[0].style.background);
console.log(oddLis[1].style.background);
console.log(oddLis[2].style.background);
console.log(oddLis)

for(var i=0; i<oddLis.length; i++){
    console.log(oddLis[i]);
    oddLis[i].style.background = 'gray';
}

// hoisted function - space used by browser
console.log(test());

function test(){
    let a = 10;
    return a;
}

// console.log(testAnonimus());
// better for saving space on the browser
let testAnonimus = function(){
    let b = 20;
    return b;
}

console.log(testAnonimus());

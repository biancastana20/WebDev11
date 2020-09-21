var firstName = 'Daniel';
var lastName = 'Popescu';

val = firstName + ' ' + lastName;
val += ' este student';

// Escaping
// val = "That's awesome I can't wait";
val = 'That\'s awesome \\ \"I\" can\'t wait';
var myPath = 'C:\\Windows\\System32';
console.log(val)
// Indexing
console.log(val[4]); // '
console.log(val.charAt(19));

// IndexOf
console.log(val.indexOf('a'));
console.log(val.lastIndexOf('a'));

// substring
console.log(val.substring(2, 5));

// split
var str = 'Ana are mere, dar are si cirese';
val = str.split(' ');

// replace
val = str.replace('are', 'n-are');

// output
console.log(val);
console.log(myPath);
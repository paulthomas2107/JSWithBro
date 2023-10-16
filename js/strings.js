let username = 'Paul T Code';
console.log(username.length);
console.log(username.charAt(3));
console.log(username.indexOf('T'));
console.log(username.lastIndexOf('T'));
console.log(username.trim());
console.log(username.toUpperCase());
console.log(username.toLowerCase());

let pn = '0161-898-1234';
console.log(pn.replaceAll('-', ''));

// Slice 
let full = 'Paul Thomas';
let first;
let last;


first = full.slice(0, 4);
last = full.slice(5);
console.log(first, last);

last = full.slice(full.indexOf(' ') + 1);
first = full.slice(0, full.indexOf(' '));
console.log(last, first);

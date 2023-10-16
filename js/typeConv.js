/*
let age = window.prompt('Age ?');
console.log(typeof age);
age = Number(age);
age++;
console.log(age);
console.log(typeof age);
*/

let x;
let y;
let z;

x = Number('3.14');
y = String(3.14);
z = Boolean('');
z1 = Boolean(true);
z2 = Boolean('pizza'); // always true is string;
z3 = Number('xxx'); // NaN

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
console.log(z1, typeof z1);
console.log(z2, typeof z2);
console.log(z3, typeof z3);

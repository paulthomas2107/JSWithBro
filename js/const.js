// const a var which can't be changed
const PI = 3.14159;

let radius;
let circumference;

radius = window.prompt('Radius ?');
radius = Number(radius);
circumference = 2 * PI * radius;

console.log(circumference);

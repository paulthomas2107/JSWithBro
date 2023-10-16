/*
let username = window.prompt('What is the name ?');
console.log(username);
*/

let username;

document.getElementById('myButton').onclick = function () {
  username = document.getElementById('myText').value;
  document.getElementById('lab1').innerHTML = "Hello " + username;
  console.log(username);
};

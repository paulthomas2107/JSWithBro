displayNums(0, 0, 0);

document.getElementById('roll').onclick = function () {
  let x = Math.floor(Math.random() * 9) + 1;
  let y = Math.floor(Math.random() * 9) + 1;
  let z = Math.floor(Math.random() * 9) + 1;
  displayNums(x, y, z);
};

function displayNums(x, y, z) {
  document.getElementById('num1').innerText = x;
  document.getElementById('num2').innerText = y;
  document.getElementById('num3').innerText = z;
}

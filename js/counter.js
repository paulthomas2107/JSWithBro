let count = 0;

document.getElementById('decreaseBtn').onclick = function () {
  count -= 1;
  if (count < 0 || count > 10) {
    count = 0;
  }
  document.getElementById('countLabel').innerText = count;
};

document.getElementById('resetBtn').onclick = function () {
  count = 0;
  document.getElementById('countLabel').innerText = count;
};

document.getElementById('increaseBtn').onclick = function () {
  count += 1;
  if (count < 0 || count > 10) {
    count = 0;
  }
  document.getElementById('countLabel').innerText = count;
};

function display(value) {
  document.getElementById("input").value += value;
}
console.log(display);

function calculate() {
  document.getElementById("input").value = eval(
    document.getElementById("input").value
  );
}
console.log(calculate);
function remove() {
  document.getElementById("input").value = "";
}
console.log(remove);

function backspace() {
  document.getElementById("input").value = document
    .getElementById("input")
    .value.slice(0, -1);
  console.log(backspace);
}



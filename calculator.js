let display = document.getElementById("result");

function appendToResult(value) {
  // display.value += value;
  display.value = display.value + value; //without shorthand
}

function clearResult() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = " Arithmetic Error";
  }
}



document.getElementById("theme-toggle").addEventListener("click", () => {
  document.querySelector(".calculator").classList.toggle("dark");
});

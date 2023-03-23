console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let result;

  // --v-- write your code here --v--
  formData = new FormData(event.target);
  data = Object.fromEntries(formData);

  const numberA = parseInt(data.numberA);
  const numberB = parseInt(data.numberB);

  if (data.operator === "addition") {
    result = add(numberA, numberB);
  } else if (data.operator === "subtraction") {
    result = subtract(numberA, numberB);
  } else if (data.operator === "multiplication") {
    result = multiply(numberA, numberB);
  } else if (data.operator === "division" && numberB !== 0) {
    result = divide(numberA, numberB);
  } else if (data.operator === "division" && numberB === 0) {
    result = "🤬";
    close();
  }
  // --^-- write your code here --^--

  resultOutput.textContent = result;
});

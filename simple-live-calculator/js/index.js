console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');

firstInput.addEventListener("input", () => {
  let multiplication = +firstInput.value * +secondInput.value;
  result.textContent = multiplication;
});

secondInput.addEventListener("input", () => {
  let multiplication = +firstInput.value * +secondInput.value;
  result.textContent = multiplication;
});

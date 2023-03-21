console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

let pizzaSize1 = 24;
let pizzaSize2 = 24;

pizzaInput1.addEventListener("input", () => {
  pizzaSize1 = pizzaInput1.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
});

pizzaInput2.addEventListener("input", () => {
  pizzaSize2 = pizzaInput2.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
});

// Task 1

function calculatePizzaGain(diameter1, diameter2) {
  let pizzaArea1 = Math.PI * diameter1;
  let pizzaArea2 = Math.PI * diameter2;
  let pizzaGain = ((pizzaArea2 - pizzaArea1) / pizzaArea1) * 100;
  let textContent = Math.round(pizzaGain);
  output.innerHTML = textContent;
}

// Task 2

function updatePizzaDisplay(pizzaElement, newSize) {
  // write your code here
}

// Task 3

function updateOutputColor(size1, size2) {
  // write your code here
}

calculatePizzaGain(pizzaSize1, pizzaSize2);

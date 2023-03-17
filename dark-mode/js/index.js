console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');

darkModeButton.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

const lightModeButton = document.querySelector('[data-js="light-mode-button"]');

lightModeButton.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

const toggleButton = document.querySelector('[data-js="toggle-button"]');

toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});

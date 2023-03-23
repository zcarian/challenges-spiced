// console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const userData = new FormData(event.target);
  const data = Object.fromEntries(userData);
  console.log(data);
  const sum = parseInt(data["age"]) + parseInt(data["badness"]);
  console.log('The age-badness-sum of "firstName" is ', sum);
});

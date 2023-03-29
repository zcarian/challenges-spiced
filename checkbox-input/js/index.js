console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const success = document.querySelector('[data-js="success" ]');

function hideMessege(messege) {
  messege.setAttribute("hidden", "");
}

function showMessege(messege) {
  messege.removeAttribute("hidden");
}

hideMessege(success);
hideMessege(tosError);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  const elements = event.target.elements;
  const ifCheckboxChecked = elements.tos.checked;
  if (!ifCheckboxChecked) {
    showMessege(tosError);
    return;
  } else {
    showMessege(success);
    hideMessege(tosError);
    alert("Form submitted");
  }
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
});

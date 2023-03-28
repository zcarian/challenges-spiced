console.clear();

const main = document.querySelector('[data-js="main"]');

// Create a list from an array

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write/change code here --v--
for (value of programmingLanguages) {
  const element = document.createElement("li");
  element.textContent = value;
  ol.append(element);
}
// --^-- write/change code here --^--

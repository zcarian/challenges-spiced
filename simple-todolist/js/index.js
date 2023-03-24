console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  console.log(data.headline, data.task);
  if (data.headline && data.task) {
    //checking if entry is not empty
    addEntry(data);
    form.reset();
    form.headline.focus();
  }
});

function addEntry(obj) {
  const entry = document.createElement("li");

  const newHeadline = document.createElement("h2");
  newHeadline.textContent = obj.headline;
  entry.append(newHeadline);

  const newTask = document.createElement("p");
  newTask.textContent = obj.task;
  entry.append(newTask);

  todoList.append(entry);
}

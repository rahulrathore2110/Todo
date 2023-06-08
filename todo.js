// get the element from the index file

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoStart = document.getElementById("todo-start");

// Set event listneer to save the todos

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;

  if (!value) return;

  // crate new task

  const newTask = document.createElement("p");
  newTask.classList.add("task");
  newTask.setAttribute("draggable", "true");
  newTask.innerText = value;

  //  set a draggable event to the task

  newTask.addEventListener("dragstart", () => {
    newTask.classList.add("is-dragging");
  });

  newTask.addEventListener("dragend", () => {
    newTask.classList.remove("is-dragging");
  });

    // appent the task to the todo-start
  todoStart.appendChild(newTask);

  input.value = "";
});

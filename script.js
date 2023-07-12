const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");
const incompleteTasksList = document.getElementById("incomplete-tasks");

addTaskButton.addEventListener("click", function() {
  const taskText = newTaskInput.value;
  if (taskText === "") {
    return;
  }

  const newTaskElement = document.createElement("li");
  newTaskElement.textContent = taskText;
  newTaskElement.classList.add("incomplete");

  incompleteTasksList.appendChild(newTaskElement);

  newTaskInput.value = "";
});

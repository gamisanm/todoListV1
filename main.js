// Function to add a new task
function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    var newTask = document.createElement("li");
    newTask.innerHTML =
      '<input type="checkbox" class="task-checkbox">' +
      '<span class="task-name">' +
      taskInput.value +
      "</span>" +
      '<button class="delete-btn" onclick="removeTask(this)">Delete</button>';
    taskList.appendChild(newTask);
    taskInput.value = "";
  }
}

// Function to remove a task
function removeTask(button) {
  var taskItem = button.parentElement;
  taskItem.remove();
}

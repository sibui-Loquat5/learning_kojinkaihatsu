let addButton = document.getElementById("addButton");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

addButton.addEventListener("click", () => {
  let taskListItem = document.createElement("li");
  let taskDeleteButton = document.createElement("button");

  taskListItem.textContent = taskInput.value;
  taskDeleteButton.textContent = "削除";

  DeleteTaskListItem(taskDeleteButton, taskListItem);

  taskListItem.appendChild(taskDeleteButton);
  taskList.appendChild(taskListItem);
  taskInput.value = "";
});

function DeleteTaskListItem(taskDeleteButton, taskListItem) {
    taskDeleteButton.addEventListener("click", () => {
        taskList.removeChild(taskListItem);
    });
}


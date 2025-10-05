const addButton = document.getElementById("addButton") as HTMLButtonElement;
const taskInput = document.getElementById("taskInput") as HTMLInputElement;
const taskList = document.getElementById("taskList") as HTMLUListElement;

addButton.addEventListener("click", () => {
  const newTaskText: string = taskInput.value;
  if (newTaskText === "") {
    alert("タスクを入力してください");
    return;
  }

  const taskListItem = document.createElement("li");
  const taskDeleteButton = document.createElement("button");

  taskListItem.textContent = newTaskText;
  taskDeleteButton.textContent = "削除";

  DeleteTaskListItem(taskDeleteButton, taskListItem);

  taskListItem.appendChild(taskDeleteButton);
  taskList.appendChild(taskListItem);
  taskInput.value = "";
});

function DeleteTaskListItem(
  taskDeleteButton: HTMLButtonElement,
  taskListItem: HTMLLIElement
) {
  taskDeleteButton.addEventListener("click", () => {
    if (taskList) {
      taskList.removeChild(taskListItem);
    }
  });
}

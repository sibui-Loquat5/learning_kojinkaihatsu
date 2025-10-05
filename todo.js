var addButton = document.getElementById("addButton");
var taskInput = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");
addButton.addEventListener("click", function () {
    var newTaskText = taskInput.value;
    if (newTaskText === "") {
        alert("タスクを入力してください");
        return;
    }
    var taskListItem = document.createElement("li");
    var taskDeleteButton = document.createElement("button");
    taskListItem.textContent = newTaskText;
    taskDeleteButton.textContent = "削除";
    DeleteTaskListItem(taskDeleteButton, taskListItem);
    taskListItem.appendChild(taskDeleteButton);
    taskList.appendChild(taskListItem);
    taskInput.value = "";
});
function DeleteTaskListItem(taskDeleteButton, taskListItem) {
    taskDeleteButton.addEventListener("click", function () {
        if (taskList) {
            taskList.removeChild(taskListItem);
        }
    });
}

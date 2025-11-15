const form = document.getElementById("tasks__form");
const task = document.getElementById("task__input");
const taskBrowser = document.getElementById("tasks__list");

function removeTask(e) {
    let task = e.target.closest(".task");
    let taskTitle = task.querySelector(".task__title").innerText;
    
    let taskList = JSON.parse(localStorage.getItem("Tasks"));
    let i = taskList.indexOf(taskTitle);
    taskList.splice(i, 1);
    localStorage.setItem("Tasks", JSON.stringify(taskList));
    
    task.remove();
}

function insertToBrowser(task) {
    const newTask = document.createElement("div");
    newTask.className = "task";
    newTask.innerHTML = "<div class='task__title'>" + task + "</div><a href='#' class='task__remove'>&times;</a>";

    taskBrowser.appendChild(newTask);
    const toTrash = newTask.querySelector(".task__remove");
    toTrash.onclick = removeTask
}


let tasks = JSON.parse(localStorage.getItem("Tasks"));
if (!tasks) {
  tasks = [];
}
for (let i = 0; i < tasks.length; i++) {
    insertToBrowser(tasks[i]);
}

form.onsubmit = (e) => {
    e.preventDefault();
    
    if (task.value.trim() == "") return false;

    let taskList = JSON.parse(localStorage.getItem("Tasks"));
    if (!taskList) {
        taskList = [];
    }
    taskList[taskList.length] = task.value;
    localStorage.setItem("Tasks", JSON.stringify(taskList));

    insertToBrowser(task.value);
    form.reset();
}

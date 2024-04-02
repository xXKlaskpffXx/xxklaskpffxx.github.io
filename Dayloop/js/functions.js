let taskArr = Storage.getStorage()[0];
resetLoop();
UI.displayData();

function toggleTask(task) {
  const Task = taskArr.filter((item) => item.id == +task.dataset.id)[0];
  Task.checked = !Task.checked;
  let icon;
  if (task.classList.contains("completed")) {
    // uncheck
    task.classList.remove("completed");
    icon = "radio-button-off-outline";
  } else {
    //check
    task.classList.add("completed");
    icon = "radio-button-on-outline";
  }
  task.children[0].name = icon;
  Storage.saveToStorage(taskArr);
}

function createTask() {
  const taskname = document.getElementById("task-name").value;
  const task = new Task(taskname, Math.random() * 100000);
  taskArr.push(task);
  UI.displayData();
  UI.setScreen("addtaskscreen", false);
  Storage.saveToStorage(taskArr);
}

function deleteTask(btn) {
  UI.removeTask(btn.parentElement.dataset.id);
  btn.parentElement.remove();
  Storage.saveToStorage(taskArr);
}

function resetLoop() {
  const day = new Date();
  const stgDay = Storage.getStorage[1];

  if (stgDay !== null && stgDay !== day.getDate()) {
    for (let task of taskArr) {
      task.checked = false;
    }
  }
}

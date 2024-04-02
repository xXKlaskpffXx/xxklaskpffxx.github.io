class Storage {
  static saveToStorage(taskarr) {
    localStorage.setItem("task", JSON.stringify(taskarr));
    localStorage.setItem("lastUse", JSON.stringify(new Date().getDate()));
  }

  static getStorage() {
    let storage =
      localStorage.getItem("task") === null
        ? []
        : JSON.parse(localStorage.getItem("task"));
    let date =
      localStorage.getItem("lastUse") === null
        ? null
        : JSON.parse(localStorage.getItem("lastUse"));
    return [storage, date];
  }
}

class Task {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.checked = false;
  }
}

class UI {
  static displayData() {
    const tasklist = document.getElementById("task-list");
    let displayData = taskArr.map((item) => {
      return `<div class="task ${
        item.checked ? "completed" : ""
      }" onclick="toggleTask(this)" data-id=${
        item.id
      }><ion-icon class="task-icon" name="${
        item.checked ? "radio-button-on-outline" : "radio-button-off-outline"
      }"></ion-icon><span>${
        item.name
      }</span><button class="close-btn" onclick="deleteTask(this)">
      <ion-icon name="close-outline" class="close-icon"></ion-icon>
    </button></div>`;
    });
    tasklist.innerHTML = displayData.join(" ");
  }

  static setScreen(screenID, open) {
    const screen = document.getElementById(screenID);
    if (open) {
      screen.classList.add("screen-visible");
    } else {
      screen.classList.remove("screen-visible");
      document.getElementById("task-name").value = "";
    }
  }

  static removeTask(id) {
    taskArr = taskArr.filter((item) => item.id !== +id);
  }
}

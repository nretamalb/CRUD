`--- Boton Add New Task ---`;
const newTaskBtn = document.getElementById("addNew");

const newTaskModal = document.getElementById("addNewModal");

`--- Boton x Cerrar Modal ---`;
const closeModal = document.getElementById("closeModal");

`--- Boton Add nueva tarea ---`;
const addNewTaskBTN = document.getElementById("modal-newTaskAddBTN");

`--- Inputs de nueva tarea ---`;

const newTaskTitle = document.getElementById("newTaskTitle");
const newTaskDate = document.getElementById("newTaskDate");
const newTaskDescr = document.getElementById("newTaskDescription");

`--- Lista de tareas creadas ---`;
const taskList = document.getElementById("tasks");

newTaskBtn.onclick = function () {
  newTaskModal.style.display = "block";
};

closeModal.onclick = function () {
  newTaskModal.style.display = "none";
};

addNewTaskBTN.addEventListener("click", (e) => {
  newTask();
});

function newTask() {
  if (newTaskTitle.value.length == 0) {
    alert("Please add a Title");
  } else {
    acceptData();
  }
}

let data = {};

function acceptData() {
  data["text"] = newTaskTitle.value;
  data["date"] = newTaskDate.value;
  data["description"] = newTaskDescr.value;

  createTask();
}

function createTask() {
  taskList.innerHTML += `
  <div>
    <span class="task-name">${data.text}</span>
    <span class="task-date">${data.date}</span>
    <p class="task-description">${data.description}</p>
    <span class="options">
      <i class="fa-regular fa-pen-to-square"></i>
      <i class="fa-solid fa-trash"></i>
    </span>
  </div>`;
}

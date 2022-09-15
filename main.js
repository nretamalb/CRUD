/*---Boton Add New Task ---*/
const newTaskBtn = document.getElementById("addNew");

const newTaskModal = document.getElementById("modal");

/*--- Boton x Cerrar Modal ---*/
const xModalBTN = document.getElementById("xModal");
const closeModalBTN = document.getElementById("modal-close");

/*--- Boton Add nueva tarea ---*/
const addNewTaskBTN = document.getElementById("modal-newTaskAddBTN");
const saveTaskBTN = document.getElementById("modal-saveTaskAddBTN");

/*****--- Abrir y cerrar Modal ---*****/

/*---Abrir--- */
function openModal() {
  newTaskModal.style.display = "block";
}

newTaskBtn.addEventListener("click", (e) => {
  document.getElementById("modal-title").innerHTML = "New Task";
  saveTaskBTN.style.display = "none";
  addNewTaskBTN.style.display = "inline";
  openModal(e);
});

/*---Cerrar---*/
function closeModal(e) {
  modal.style.display = "none";
  limpiarInput();
}

xModalBTN.addEventListener("click", (e) => closeModal(e));

closeModalBTN.addEventListener("click", (e) => closeModal(e));

/*****--- Crear nueva Tarea ---*****/

/* Inputs de nueva tarea */

const newTaskTitle = document.getElementById("newTaskTitle");
const newTaskDate = document.getElementById("newTaskDate");
const newTaskDescr = document.getElementById("newTaskDescription");

/*--- Lista de tareas creadas ---*/
const taskList = document.getElementById("tasks");

/* -----Add New Task-----*/

addNewTaskBTN.addEventListener("click", (e) => newTask(e));

/*Boton crear nueva tarea*/
function newTask(e) {
  e.preventDefault();
  if (newTaskTitle.value.length == 0) {
    alert("Please add a Title");
  } else {
    logData(); /*Registra data y Crea nueva tarea*/
    leerTareas();
    mostrarTareas();
    closeModal(); /*Cierra Modal luego de crear nueva tarea*/
  }
}
/*Crea y define valores para objeto tarea*/
let tareas = [];

function logData() {
  const tarea = {
    title: newTaskTitle.value,
    date: newTaskDate.value,
    description: newTaskDescr.value,
  };
  tareas.push(tarea);

  guardarEnLS(tareas);
}

function guardarEnLS(tareas) {
  let tareasEnString = JSON.stringify(tareas);
  window.localStorage.setItem("tareas", tareasEnString);
}

/*Mostrar tareas luego de recargar pagina*/

function leerTareas() {
  let tareasEnLS = window.localStorage.getItem("tareas");
  tareas = JSON.parse(tareasEnLS) || [];
}

function mostrarTareas() {
  taskList.innerHTML = "";
  tareas.forEach((tarea) => {
    taskList.innerHTML += `
  <div>
    <span class="task-name">${tarea.title}</span>
    <span class="task-date">${tarea.date}</span>
    <p class="task-description">${tarea.description}</p>
    <span class="options">
      <i onClick="editarTarea(this, '${tarea.title}')" class="fa-regular fa-pen-to-square clickable"></i>
      <i onClick="eliminarTarea(this, '${tarea.title}')" class="fa-solid fa-trash clickable"></i>
    </span>
  </div>`;
  });
}

function limpiarInput() {
  newTaskTitle.value = "";
  newTaskDate.value = "";
  newTaskDescr.value = "";
}
leerTareas();
mostrarTareas();
/*Editar y borrar tareas */

function eliminarTarea(boton, title) {
  boton.parentElement.parentElement.remove();
  tareas = tareas.filter((tarea) => tarea.title !== title);
  guardarEnLS(tareas);
}

function editarTarea(boton, titleTarea) {
  /*Edita Titulo Modal y boton guardar */
  document.getElementById("modal-title").innerHTML = "Edit Task";
  saveTaskBTN.style.display = "inline";
  addNewTaskBTN.style.display = "none";

  /*Tomar informacion del objeto tarea */
  let tareaParaEditar = tareas.find((tarea) => tarea.title === titleTarea);
  console.log(tareaParaEditar);
  newTaskTitle.value = tareaParaEditar.title;
  newTaskDate.value = tareaParaEditar.date;
  newTaskDescr.value = tareaParaEditar.description;

  openModal();
}

saveTaskBTN.addEventListener("click", (evento) => actualizarTarea(evento));

function actualizarTarea(evento) {
  evento.preventDefault();
}

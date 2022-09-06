var newTaskBtn = document.getElementById("addNew");

var newTaskModal = document.getElementById("addNewModal");

var closeModal = document.getElementById("closeModal");

newTaskBtn.onclick = function () {
  newTaskModal.style.display = "block";
};

closeModal.onclick = function () {
  newTaskModal.style.display = "none";
};

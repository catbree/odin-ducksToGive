export default function addTask() {
  
  const addTaskButton = document.querySelector(".addTaskButton");
  var addTaskModal = document.getElementById("addTaskModal");
  var closeModal = document.getElementsByClassName("close")[0];
  
  addTaskButton.onclick = function() {
    addTaskModal.style.display = "block";
  }
  
  closeModal.onclick = function() {
    addTaskModal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == addTaskModal) {
      addTaskModal.style.display = "none";
    }
  }

  const newTaskTitle = addTaskModal.querySelector("#taskTitle");
  const newTaskDate = addTaskModal.querySelector("#taskDate");
  const newTaskProject = addTaskModal.querySelector("#taskProject");
  const newTaskDuckCount = addTaskModal.querySelector("#taskDuckCount");
  const saveTaskButton = addTaskModal.querySelector(".saveTaskButton");

  console.log(saveTaskButton);

  saveTaskButton.addEventListener("click", () => {
    console.log(newTaskTitle.value);
  })

}



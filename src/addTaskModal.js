import {TaskItem, taskList} from './taskItemsAndList.js';
import {updateTaskListDisplay} from './displayController.js';


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
    const newTaskItem = new TaskItem(newTaskTitle.value, newTaskDate.value, newTaskProject.value, newTaskDuckCount.value, false);
    taskList.taskItems.push(newTaskItem);
    console.log(taskList.taskItems);
    updateTaskListDisplay();
    addTaskModal.style.display = "none";
  })

}



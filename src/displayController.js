import {taskList} from './taskItemsAndList.js';
import calendarIcon from './assets/calendarIcon.svg';
import duckLogo from './assets/duckLogo.png'

const incompleteTaskListDisplay = document.querySelector(".incompleteTasks");
const completeTaskListDisplay = document.querySelector(".completeTasks");


const createTaskItemCardDisplay = (taskItem) => {

    const itemCardDisplay = document.createElement('div');
    const itemCardFirstLineDisplay = document.createElement('div');
    const itemCardSecondLineDisplay = document.createElement('div');
    const itemCardCheckboxDisplay = document.createElement('input');
    const itemCardTitleDisplay = document.createElement('label');
    const itemCardButtonGroupDisplay = document.createElement('div');
    const itemCardDeleteGroupDisplay = document.createElement('button');
    const itemCardEditButtonDisplay = document.createElement('button');
    const itemCardScheduleLabelDisplay = document.createElement('div');
    const itemCardScheduleLabelContentDisplay = document.createElement('span');
    const itemCardProjectLabelDisplay = document.createElement('div');
    const itemCardProjectLabelContentDisplay = document.createElement('span');
    const itemCardDucksLabelDisplay = document.createElement('div');
    
    const scheduledDateIcon = new Image();
    scheduledDateIcon.src = calendarIcon;
    
    itemCardDisplay.classList.add("taskItemCard");
    itemCardFirstLineDisplay.classList.add("taskFirstLine");
    itemCardSecondLineDisplay.classList.add("taskSecondLine");
    itemCardCheckboxDisplay.setAttribute("type", "checkbox");
    itemCardTitleDisplay.classList.add("taskTitle");
    itemCardButtonGroupDisplay.classList.add("buttonGroup");
    itemCardScheduleLabelDisplay.classList.add("taskScheduled");
    itemCardScheduleLabelDisplay.classList.add("label");
    itemCardProjectLabelDisplay.classList.add("taskProject");
    itemCardProjectLabelDisplay.classList.add("label");
    itemCardDucksLabelDisplay.classList.add("taskDucks");
    itemCardDucksLabelDisplay.classList.add("label");
    scheduledDateIcon.classList.add("iconMini");

    
    itemCardTitleDisplay.textContent = taskItem.title;
    itemCardEditButtonDisplay.textContent = "Edit";
    itemCardDeleteGroupDisplay.textContent = "Delete";
    itemCardScheduleLabelContentDisplay.textContent = taskItem.scheduledDate;
    itemCardProjectLabelContentDisplay.textContent = taskItem.project;

    incompleteTaskListDisplay.appendChild(itemCardDisplay);
    itemCardDisplay.appendChild(itemCardFirstLineDisplay);
    itemCardDisplay.appendChild(itemCardSecondLineDisplay);
    itemCardFirstLineDisplay.appendChild(itemCardCheckboxDisplay);
    itemCardFirstLineDisplay.appendChild(itemCardTitleDisplay);
    itemCardFirstLineDisplay.appendChild(itemCardButtonGroupDisplay);
    itemCardButtonGroupDisplay.appendChild(itemCardEditButtonDisplay);
    itemCardButtonGroupDisplay.appendChild(itemCardDeleteGroupDisplay);
    itemCardSecondLineDisplay.appendChild(itemCardScheduleLabelDisplay);
    itemCardScheduleLabelDisplay.appendChild(scheduledDateIcon);
    itemCardScheduleLabelDisplay.appendChild(itemCardScheduleLabelContentDisplay);
    itemCardSecondLineDisplay.appendChild(itemCardProjectLabelDisplay);
    itemCardProjectLabelDisplay.appendChild(itemCardProjectLabelContentDisplay);
    itemCardSecondLineDisplay.appendChild(itemCardDucksLabelDisplay); 
    
    for (let i=0; i<taskItem.duckCount; i++) {
        console.log(taskItem.duckCount);
        console.log(`iterating for the ${i} time`)
        const duckCountIcon = new Image();
        duckCountIcon.src = duckLogo;
        duckCountIcon.classList.add("iconMini");
        itemCardDucksLabelDisplay.appendChild(duckCountIcon);
    }
}

export const updateTaskListDisplay = () => {
    refreshTaskListDisplay();
    for (let taskItem of taskList.taskItems) {
        createTaskItemCardDisplay(taskItem);
        console.log(`taskItem created`);
    }
}

const refreshTaskListDisplay = () => {
    incompleteTaskListDisplay.textContent = "";
}

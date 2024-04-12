"use strict";
(self["webpackChunkodin_duckstogive"] = self["webpackChunkodin_duckstogive"] || []).push([["addTaskModal"],{

/***/ "./src/addTaskModal.js":
/*!*****************************!*\
  !*** ./src/addTaskModal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addTask)
/* harmony export */ });
/* harmony import */ var _taskItemsAndList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskItemsAndList.js */ "./src/taskItemsAndList.js");
/* harmony import */ var _displayController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayController.js */ "./src/displayController.js");




function addTask() {
  
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
    const newTaskItem = new _taskItemsAndList_js__WEBPACK_IMPORTED_MODULE_0__.TaskItem(newTaskTitle.value, newTaskDate.value, newTaskProject.value, newTaskDuckCount.value, false);
    _taskItemsAndList_js__WEBPACK_IMPORTED_MODULE_0__.taskList.taskItems.push(newTaskItem);
    console.log(_taskItemsAndList_js__WEBPACK_IMPORTED_MODULE_0__.taskList.taskItems);
    (0,_displayController_js__WEBPACK_IMPORTED_MODULE_1__.updateTaskListDisplay)();
    addTaskModal.style.display = "none";
  })

}




/***/ }),

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateTaskListDisplay: () => (/* binding */ updateTaskListDisplay)
/* harmony export */ });
/* harmony import */ var _taskItemsAndList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskItemsAndList.js */ "./src/taskItemsAndList.js");
/* harmony import */ var _assets_calendarIcon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/calendarIcon.svg */ "./src/assets/calendarIcon.svg");
/* harmony import */ var _assets_duckLogo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/duckLogo.png */ "./src/assets/duckLogo.png");




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
    scheduledDateIcon.src = _assets_calendarIcon_svg__WEBPACK_IMPORTED_MODULE_1__;
    
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
        duckCountIcon.src = _assets_duckLogo_png__WEBPACK_IMPORTED_MODULE_2__;
        duckCountIcon.classList.add("iconMini");
        itemCardDucksLabelDisplay.appendChild(duckCountIcon);
    }
}

const updateTaskListDisplay = () => {
    refreshTaskListDisplay();
    for (let taskItem of _taskItemsAndList_js__WEBPACK_IMPORTED_MODULE_0__.taskList.taskItems) {
        createTaskItemCardDisplay(taskItem);
        console.log(`taskItem created`);
    }
}

const refreshTaskListDisplay = () => {
    incompleteTaskListDisplay.textContent = "";
}


/***/ }),

/***/ "./src/taskItemsAndList.js":
/*!*********************************!*\
  !*** ./src/taskItemsAndList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskItem: () => (/* binding */ TaskItem),
/* harmony export */   taskList: () => (/* binding */ taskList)
/* harmony export */ });
class TaskItem {
    constructor(title,scheduledDate,project,duckCount,isCompleted) {
        this.title = title;
        this.scheduledDate = scheduledDate;
        this.project = project;
        this.duckCount = duckCount;
        this.isCompleted = isCompleted;
    }
  }


class TaskList {
  constructor() {
    this.taskItems = [];
  }
}

const taskList = new TaskList;

taskList.taskItems[0] = new TaskItem("Take out the trash", "12/04/2024", "Housekeeping", "1", false);
taskList.taskItems[1] = new TaskItem("Bring doggo to the vet", "15/04/2024", "Housekeeping", "2", false);
taskList.taskItems[2] = new TaskItem("Complete ducks todo project", "16/04/2024", "Work", "6", false);
  

/***/ }),

/***/ "./src/assets/calendarIcon.svg":
/*!*************************************!*\
  !*** ./src/assets/calendarIcon.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "92071b0448f38637cb6c.svg";

/***/ }),

/***/ "./src/assets/duckLogo.png":
/*!*********************************!*\
  !*** ./src/assets/duckLogo.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5f6571fb36e511ef480d.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/addTaskModal.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkVGFza01vZGFsLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUQ7QUFDSTs7O0FBRzlDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw0QkFBNEIsMERBQVE7QUFDcEMsSUFBSSwwREFBUTtBQUNaLGdCQUFnQiwwREFBUTtBQUN4QixJQUFJLDRFQUFxQjtBQUN6QjtBQUNBLEdBQUc7O0FBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEMrQztBQUNNO0FBQ1Q7O0FBRTVDO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixxREFBWTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isc0JBQXNCO0FBQ3hDO0FBQ0EseUNBQXlDLEdBQUc7QUFDNUM7QUFDQSw0QkFBNEIsaURBQVE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBLHlCQUF5QiwwREFBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPOztBQUVQO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1kdWNrc3RvZ2l2ZS8uL3NyYy9hZGRUYXNrTW9kYWwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1kdWNrc3RvZ2l2ZS8uL3NyYy9kaXNwbGF5Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLWR1Y2tzdG9naXZlLy4vc3JjL3Rhc2tJdGVtc0FuZExpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUYXNrSXRlbSwgdGFza0xpc3R9IGZyb20gJy4vdGFza0l0ZW1zQW5kTGlzdC5qcyc7XG5pbXBvcnQge3VwZGF0ZVRhc2tMaXN0RGlzcGxheX0gZnJvbSAnLi9kaXNwbGF5Q29udHJvbGxlci5qcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkVGFzaygpIHtcbiAgXG4gIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFRhc2tCdXR0b25cIik7XG4gIHZhciBhZGRUYXNrTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRhc2tNb2RhbFwiKTtcbiAgdmFyIGNsb3NlTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIilbMF07XG4gIFxuICBhZGRUYXNrQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICBhZGRUYXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgfVxuICBcbiAgY2xvc2VNb2RhbC5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgYWRkVGFza01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxuICBcbiAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQgPT0gYWRkVGFza01vZGFsKSB7XG4gICAgICBhZGRUYXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG5ld1Rhc2tUaXRsZSA9IGFkZFRhc2tNb2RhbC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tUaXRsZVwiKTtcbiAgY29uc3QgbmV3VGFza0RhdGUgPSBhZGRUYXNrTW9kYWwucXVlcnlTZWxlY3RvcihcIiN0YXNrRGF0ZVwiKTtcbiAgY29uc3QgbmV3VGFza1Byb2plY3QgPSBhZGRUYXNrTW9kYWwucXVlcnlTZWxlY3RvcihcIiN0YXNrUHJvamVjdFwiKTtcbiAgY29uc3QgbmV3VGFza0R1Y2tDb3VudCA9IGFkZFRhc2tNb2RhbC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tEdWNrQ291bnRcIik7XG4gIGNvbnN0IHNhdmVUYXNrQnV0dG9uID0gYWRkVGFza01vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIuc2F2ZVRhc2tCdXR0b25cIik7XG5cbiAgY29uc29sZS5sb2coc2F2ZVRhc2tCdXR0b24pO1xuXG4gIHNhdmVUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgbmV3VGFza0l0ZW0gPSBuZXcgVGFza0l0ZW0obmV3VGFza1RpdGxlLnZhbHVlLCBuZXdUYXNrRGF0ZS52YWx1ZSwgbmV3VGFza1Byb2plY3QudmFsdWUsIG5ld1Rhc2tEdWNrQ291bnQudmFsdWUsIGZhbHNlKTtcbiAgICB0YXNrTGlzdC50YXNrSXRlbXMucHVzaChuZXdUYXNrSXRlbSk7XG4gICAgY29uc29sZS5sb2codGFza0xpc3QudGFza0l0ZW1zKTtcbiAgICB1cGRhdGVUYXNrTGlzdERpc3BsYXkoKTtcbiAgICBhZGRUYXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9KVxuXG59XG5cblxuIiwiaW1wb3J0IHt0YXNrTGlzdH0gZnJvbSAnLi90YXNrSXRlbXNBbmRMaXN0LmpzJztcbmltcG9ydCBjYWxlbmRhckljb24gZnJvbSAnLi9hc3NldHMvY2FsZW5kYXJJY29uLnN2Zyc7XG5pbXBvcnQgZHVja0xvZ28gZnJvbSAnLi9hc3NldHMvZHVja0xvZ28ucG5nJ1xuXG5jb25zdCBpbmNvbXBsZXRlVGFza0xpc3REaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmNvbXBsZXRlVGFza3NcIik7XG5jb25zdCBjb21wbGV0ZVRhc2tMaXN0RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcGxldGVUYXNrc1wiKTtcblxuXG5jb25zdCBjcmVhdGVUYXNrSXRlbUNhcmREaXNwbGF5ID0gKHRhc2tJdGVtKSA9PiB7XG5cbiAgICBjb25zdCBpdGVtQ2FyZERpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpdGVtQ2FyZEZpcnN0TGluZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpdGVtQ2FyZFNlY29uZExpbmVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaXRlbUNhcmRDaGVja2JveERpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGl0ZW1DYXJkVGl0bGVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCBpdGVtQ2FyZEJ1dHRvbkdyb3VwRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGl0ZW1DYXJkRGVsZXRlR3JvdXBEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgaXRlbUNhcmRFZGl0QnV0dG9uRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGl0ZW1DYXJkU2NoZWR1bGVMYWJlbERpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpdGVtQ2FyZFNjaGVkdWxlTGFiZWxDb250ZW50RGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBpdGVtQ2FyZFByb2plY3RMYWJlbERpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpdGVtQ2FyZFByb2plY3RMYWJlbENvbnRlbnREaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IGl0ZW1DYXJkRHVja3NMYWJlbERpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICBjb25zdCBzY2hlZHVsZWREYXRlSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIHNjaGVkdWxlZERhdGVJY29uLnNyYyA9IGNhbGVuZGFySWNvbjtcbiAgICBcbiAgICBpdGVtQ2FyZERpc3BsYXkuY2xhc3NMaXN0LmFkZChcInRhc2tJdGVtQ2FyZFwiKTtcbiAgICBpdGVtQ2FyZEZpcnN0TGluZURpc3BsYXkuY2xhc3NMaXN0LmFkZChcInRhc2tGaXJzdExpbmVcIik7XG4gICAgaXRlbUNhcmRTZWNvbmRMaW5lRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwidGFza1NlY29uZExpbmVcIik7XG4gICAgaXRlbUNhcmRDaGVja2JveERpc3BsYXkuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgIGl0ZW1DYXJkVGl0bGVEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJ0YXNrVGl0bGVcIik7XG4gICAgaXRlbUNhcmRCdXR0b25Hcm91cERpc3BsYXkuY2xhc3NMaXN0LmFkZChcImJ1dHRvbkdyb3VwXCIpO1xuICAgIGl0ZW1DYXJkU2NoZWR1bGVMYWJlbERpc3BsYXkuY2xhc3NMaXN0LmFkZChcInRhc2tTY2hlZHVsZWRcIik7XG4gICAgaXRlbUNhcmRTY2hlZHVsZUxhYmVsRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwibGFiZWxcIik7XG4gICAgaXRlbUNhcmRQcm9qZWN0TGFiZWxEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJ0YXNrUHJvamVjdFwiKTtcbiAgICBpdGVtQ2FyZFByb2plY3RMYWJlbERpc3BsYXkuY2xhc3NMaXN0LmFkZChcImxhYmVsXCIpO1xuICAgIGl0ZW1DYXJkRHVja3NMYWJlbERpc3BsYXkuY2xhc3NMaXN0LmFkZChcInRhc2tEdWNrc1wiKTtcbiAgICBpdGVtQ2FyZER1Y2tzTGFiZWxEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJsYWJlbFwiKTtcbiAgICBzY2hlZHVsZWREYXRlSWNvbi5jbGFzc0xpc3QuYWRkKFwiaWNvbk1pbmlcIik7XG5cbiAgICBcbiAgICBpdGVtQ2FyZFRpdGxlRGlzcGxheS50ZXh0Q29udGVudCA9IHRhc2tJdGVtLnRpdGxlO1xuICAgIGl0ZW1DYXJkRWRpdEJ1dHRvbkRpc3BsYXkudGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgICBpdGVtQ2FyZERlbGV0ZUdyb3VwRGlzcGxheS50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG4gICAgaXRlbUNhcmRTY2hlZHVsZUxhYmVsQ29udGVudERpc3BsYXkudGV4dENvbnRlbnQgPSB0YXNrSXRlbS5zY2hlZHVsZWREYXRlO1xuICAgIGl0ZW1DYXJkUHJvamVjdExhYmVsQ29udGVudERpc3BsYXkudGV4dENvbnRlbnQgPSB0YXNrSXRlbS5wcm9qZWN0O1xuXG4gICAgaW5jb21wbGV0ZVRhc2tMaXN0RGlzcGxheS5hcHBlbmRDaGlsZChpdGVtQ2FyZERpc3BsYXkpO1xuICAgIGl0ZW1DYXJkRGlzcGxheS5hcHBlbmRDaGlsZChpdGVtQ2FyZEZpcnN0TGluZURpc3BsYXkpO1xuICAgIGl0ZW1DYXJkRGlzcGxheS5hcHBlbmRDaGlsZChpdGVtQ2FyZFNlY29uZExpbmVEaXNwbGF5KTtcbiAgICBpdGVtQ2FyZEZpcnN0TGluZURpc3BsYXkuYXBwZW5kQ2hpbGQoaXRlbUNhcmRDaGVja2JveERpc3BsYXkpO1xuICAgIGl0ZW1DYXJkRmlyc3RMaW5lRGlzcGxheS5hcHBlbmRDaGlsZChpdGVtQ2FyZFRpdGxlRGlzcGxheSk7XG4gICAgaXRlbUNhcmRGaXJzdExpbmVEaXNwbGF5LmFwcGVuZENoaWxkKGl0ZW1DYXJkQnV0dG9uR3JvdXBEaXNwbGF5KTtcbiAgICBpdGVtQ2FyZEJ1dHRvbkdyb3VwRGlzcGxheS5hcHBlbmRDaGlsZChpdGVtQ2FyZEVkaXRCdXR0b25EaXNwbGF5KTtcbiAgICBpdGVtQ2FyZEJ1dHRvbkdyb3VwRGlzcGxheS5hcHBlbmRDaGlsZChpdGVtQ2FyZERlbGV0ZUdyb3VwRGlzcGxheSk7XG4gICAgaXRlbUNhcmRTZWNvbmRMaW5lRGlzcGxheS5hcHBlbmRDaGlsZChpdGVtQ2FyZFNjaGVkdWxlTGFiZWxEaXNwbGF5KTtcbiAgICBpdGVtQ2FyZFNjaGVkdWxlTGFiZWxEaXNwbGF5LmFwcGVuZENoaWxkKHNjaGVkdWxlZERhdGVJY29uKTtcbiAgICBpdGVtQ2FyZFNjaGVkdWxlTGFiZWxEaXNwbGF5LmFwcGVuZENoaWxkKGl0ZW1DYXJkU2NoZWR1bGVMYWJlbENvbnRlbnREaXNwbGF5KTtcbiAgICBpdGVtQ2FyZFNlY29uZExpbmVEaXNwbGF5LmFwcGVuZENoaWxkKGl0ZW1DYXJkUHJvamVjdExhYmVsRGlzcGxheSk7XG4gICAgaXRlbUNhcmRQcm9qZWN0TGFiZWxEaXNwbGF5LmFwcGVuZENoaWxkKGl0ZW1DYXJkUHJvamVjdExhYmVsQ29udGVudERpc3BsYXkpO1xuICAgIGl0ZW1DYXJkU2Vjb25kTGluZURpc3BsYXkuYXBwZW5kQ2hpbGQoaXRlbUNhcmREdWNrc0xhYmVsRGlzcGxheSk7IFxuICAgIFxuICAgIGZvciAobGV0IGk9MDsgaTx0YXNrSXRlbS5kdWNrQ291bnQ7IGkrKykge1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrSXRlbS5kdWNrQ291bnQpO1xuICAgICAgICBjb25zb2xlLmxvZyhgaXRlcmF0aW5nIGZvciB0aGUgJHtpfSB0aW1lYClcbiAgICAgICAgY29uc3QgZHVja0NvdW50SWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBkdWNrQ291bnRJY29uLnNyYyA9IGR1Y2tMb2dvO1xuICAgICAgICBkdWNrQ291bnRJY29uLmNsYXNzTGlzdC5hZGQoXCJpY29uTWluaVwiKTtcbiAgICAgICAgaXRlbUNhcmREdWNrc0xhYmVsRGlzcGxheS5hcHBlbmRDaGlsZChkdWNrQ291bnRJY29uKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVUYXNrTGlzdERpc3BsYXkgPSAoKSA9PiB7XG4gICAgcmVmcmVzaFRhc2tMaXN0RGlzcGxheSgpO1xuICAgIGZvciAobGV0IHRhc2tJdGVtIG9mIHRhc2tMaXN0LnRhc2tJdGVtcykge1xuICAgICAgICBjcmVhdGVUYXNrSXRlbUNhcmREaXNwbGF5KHRhc2tJdGVtKTtcbiAgICAgICAgY29uc29sZS5sb2coYHRhc2tJdGVtIGNyZWF0ZWRgKTtcbiAgICB9XG59XG5cbmNvbnN0IHJlZnJlc2hUYXNrTGlzdERpc3BsYXkgPSAoKSA9PiB7XG4gICAgaW5jb21wbGV0ZVRhc2tMaXN0RGlzcGxheS50ZXh0Q29udGVudCA9IFwiXCI7XG59XG4iLCJleHBvcnQgY2xhc3MgVGFza0l0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLHNjaGVkdWxlZERhdGUscHJvamVjdCxkdWNrQ291bnQsaXNDb21wbGV0ZWQpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLnNjaGVkdWxlZERhdGUgPSBzY2hlZHVsZWREYXRlO1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB0aGlzLmR1Y2tDb3VudCA9IGR1Y2tDb3VudDtcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlZCA9IGlzQ29tcGxldGVkO1xuICAgIH1cbiAgfVxuXG5cbmNsYXNzIFRhc2tMaXN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50YXNrSXRlbXMgPSBbXTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdGFza0xpc3QgPSBuZXcgVGFza0xpc3Q7XG5cbnRhc2tMaXN0LnRhc2tJdGVtc1swXSA9IG5ldyBUYXNrSXRlbShcIlRha2Ugb3V0IHRoZSB0cmFzaFwiLCBcIjEyLzA0LzIwMjRcIiwgXCJIb3VzZWtlZXBpbmdcIiwgXCIxXCIsIGZhbHNlKTtcbnRhc2tMaXN0LnRhc2tJdGVtc1sxXSA9IG5ldyBUYXNrSXRlbShcIkJyaW5nIGRvZ2dvIHRvIHRoZSB2ZXRcIiwgXCIxNS8wNC8yMDI0XCIsIFwiSG91c2VrZWVwaW5nXCIsIFwiMlwiLCBmYWxzZSk7XG50YXNrTGlzdC50YXNrSXRlbXNbMl0gPSBuZXcgVGFza0l0ZW0oXCJDb21wbGV0ZSBkdWNrcyB0b2RvIHByb2plY3RcIiwgXCIxNi8wNC8yMDI0XCIsIFwiV29ya1wiLCBcIjZcIiwgZmFsc2UpO1xuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
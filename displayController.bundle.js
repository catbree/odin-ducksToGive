"use strict";
(self["webpackChunkodin_duckstogive"] = self["webpackChunkodin_duckstogive"] || []).push([["displayController"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/displayController.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheUNvbnRyb2xsZXIuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7QUFDTTtBQUNUOztBQUU1QztBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIscURBQVk7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHNCQUFzQjtBQUN4QztBQUNBLHlDQUF5QyxHQUFHO0FBQzVDO0FBQ0EsNEJBQTRCLGlEQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSx5QkFBeUIsMERBQVE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkZPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tZHVja3N0b2dpdmUvLi9zcmMvZGlzcGxheUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1kdWNrc3RvZ2l2ZS8uL3NyYy90YXNrSXRlbXNBbmRMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dGFza0xpc3R9IGZyb20gJy4vdGFza0l0ZW1zQW5kTGlzdC5qcyc7XG5pbXBvcnQgY2FsZW5kYXJJY29uIGZyb20gJy4vYXNzZXRzL2NhbGVuZGFySWNvbi5zdmcnO1xuaW1wb3J0IGR1Y2tMb2dvIGZyb20gJy4vYXNzZXRzL2R1Y2tMb2dvLnBuZydcblxuY29uc3QgaW5jb21wbGV0ZVRhc2tMaXN0RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5jb21wbGV0ZVRhc2tzXCIpO1xuY29uc3QgY29tcGxldGVUYXNrTGlzdERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXBsZXRlVGFza3NcIik7XG5cblxuY29uc3QgY3JlYXRlVGFza0l0ZW1DYXJkRGlzcGxheSA9ICh0YXNrSXRlbSkgPT4ge1xuXG4gICAgY29uc3QgaXRlbUNhcmREaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaXRlbUNhcmRGaXJzdExpbmVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaXRlbUNhcmRTZWNvbmRMaW5lRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGl0ZW1DYXJkQ2hlY2tib3hEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBpdGVtQ2FyZFRpdGxlRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgaXRlbUNhcmRCdXR0b25Hcm91cERpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpdGVtQ2FyZERlbGV0ZUdyb3VwRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGl0ZW1DYXJkRWRpdEJ1dHRvbkRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBpdGVtQ2FyZFNjaGVkdWxlTGFiZWxEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaXRlbUNhcmRTY2hlZHVsZUxhYmVsQ29udGVudERpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgaXRlbUNhcmRQcm9qZWN0TGFiZWxEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaXRlbUNhcmRQcm9qZWN0TGFiZWxDb250ZW50RGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBpdGVtQ2FyZER1Y2tzTGFiZWxEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgY29uc3Qgc2NoZWR1bGVkRGF0ZUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBzY2hlZHVsZWREYXRlSWNvbi5zcmMgPSBjYWxlbmRhckljb247XG4gICAgXG4gICAgaXRlbUNhcmREaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJ0YXNrSXRlbUNhcmRcIik7XG4gICAgaXRlbUNhcmRGaXJzdExpbmVEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJ0YXNrRmlyc3RMaW5lXCIpO1xuICAgIGl0ZW1DYXJkU2Vjb25kTGluZURpc3BsYXkuY2xhc3NMaXN0LmFkZChcInRhc2tTZWNvbmRMaW5lXCIpO1xuICAgIGl0ZW1DYXJkQ2hlY2tib3hEaXNwbGF5LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICBpdGVtQ2FyZFRpdGxlRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwidGFza1RpdGxlXCIpO1xuICAgIGl0ZW1DYXJkQnV0dG9uR3JvdXBEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJidXR0b25Hcm91cFwiKTtcbiAgICBpdGVtQ2FyZFNjaGVkdWxlTGFiZWxEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJ0YXNrU2NoZWR1bGVkXCIpO1xuICAgIGl0ZW1DYXJkU2NoZWR1bGVMYWJlbERpc3BsYXkuY2xhc3NMaXN0LmFkZChcImxhYmVsXCIpO1xuICAgIGl0ZW1DYXJkUHJvamVjdExhYmVsRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwidGFza1Byb2plY3RcIik7XG4gICAgaXRlbUNhcmRQcm9qZWN0TGFiZWxEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJsYWJlbFwiKTtcbiAgICBpdGVtQ2FyZER1Y2tzTGFiZWxEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJ0YXNrRHVja3NcIik7XG4gICAgaXRlbUNhcmREdWNrc0xhYmVsRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwibGFiZWxcIik7XG4gICAgc2NoZWR1bGVkRGF0ZUljb24uY2xhc3NMaXN0LmFkZChcImljb25NaW5pXCIpO1xuXG4gICAgXG4gICAgaXRlbUNhcmRUaXRsZURpc3BsYXkudGV4dENvbnRlbnQgPSB0YXNrSXRlbS50aXRsZTtcbiAgICBpdGVtQ2FyZEVkaXRCdXR0b25EaXNwbGF5LnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gICAgaXRlbUNhcmREZWxldGVHcm91cERpc3BsYXkudGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuICAgIGl0ZW1DYXJkU2NoZWR1bGVMYWJlbENvbnRlbnREaXNwbGF5LnRleHRDb250ZW50ID0gdGFza0l0ZW0uc2NoZWR1bGVkRGF0ZTtcbiAgICBpdGVtQ2FyZFByb2plY3RMYWJlbENvbnRlbnREaXNwbGF5LnRleHRDb250ZW50ID0gdGFza0l0ZW0ucHJvamVjdDtcblxuICAgIGluY29tcGxldGVUYXNrTGlzdERpc3BsYXkuYXBwZW5kQ2hpbGQoaXRlbUNhcmREaXNwbGF5KTtcbiAgICBpdGVtQ2FyZERpc3BsYXkuYXBwZW5kQ2hpbGQoaXRlbUNhcmRGaXJzdExpbmVEaXNwbGF5KTtcbiAgICBpdGVtQ2FyZERpc3BsYXkuYXBwZW5kQ2hpbGQoaXRlbUNhcmRTZWNvbmRMaW5lRGlzcGxheSk7XG4gICAgaXRlbUNhcmRGaXJzdExpbmVEaXNwbGF5LmFwcGVuZENoaWxkKGl0ZW1DYXJkQ2hlY2tib3hEaXNwbGF5KTtcbiAgICBpdGVtQ2FyZEZpcnN0TGluZURpc3BsYXkuYXBwZW5kQ2hpbGQoaXRlbUNhcmRUaXRsZURpc3BsYXkpO1xuICAgIGl0ZW1DYXJkRmlyc3RMaW5lRGlzcGxheS5hcHBlbmRDaGlsZChpdGVtQ2FyZEJ1dHRvbkdyb3VwRGlzcGxheSk7XG4gICAgaXRlbUNhcmRCdXR0b25Hcm91cERpc3BsYXkuYXBwZW5kQ2hpbGQoaXRlbUNhcmRFZGl0QnV0dG9uRGlzcGxheSk7XG4gICAgaXRlbUNhcmRCdXR0b25Hcm91cERpc3BsYXkuYXBwZW5kQ2hpbGQoaXRlbUNhcmREZWxldGVHcm91cERpc3BsYXkpO1xuICAgIGl0ZW1DYXJkU2Vjb25kTGluZURpc3BsYXkuYXBwZW5kQ2hpbGQoaXRlbUNhcmRTY2hlZHVsZUxhYmVsRGlzcGxheSk7XG4gICAgaXRlbUNhcmRTY2hlZHVsZUxhYmVsRGlzcGxheS5hcHBlbmRDaGlsZChzY2hlZHVsZWREYXRlSWNvbik7XG4gICAgaXRlbUNhcmRTY2hlZHVsZUxhYmVsRGlzcGxheS5hcHBlbmRDaGlsZChpdGVtQ2FyZFNjaGVkdWxlTGFiZWxDb250ZW50RGlzcGxheSk7XG4gICAgaXRlbUNhcmRTZWNvbmRMaW5lRGlzcGxheS5hcHBlbmRDaGlsZChpdGVtQ2FyZFByb2plY3RMYWJlbERpc3BsYXkpO1xuICAgIGl0ZW1DYXJkUHJvamVjdExhYmVsRGlzcGxheS5hcHBlbmRDaGlsZChpdGVtQ2FyZFByb2plY3RMYWJlbENvbnRlbnREaXNwbGF5KTtcbiAgICBpdGVtQ2FyZFNlY29uZExpbmVEaXNwbGF5LmFwcGVuZENoaWxkKGl0ZW1DYXJkRHVja3NMYWJlbERpc3BsYXkpOyBcbiAgICBcbiAgICBmb3IgKGxldCBpPTA7IGk8dGFza0l0ZW0uZHVja0NvdW50OyBpKyspIHtcbiAgICAgICAgY29uc29sZS5sb2codGFza0l0ZW0uZHVja0NvdW50KTtcbiAgICAgICAgY29uc29sZS5sb2coYGl0ZXJhdGluZyBmb3IgdGhlICR7aX0gdGltZWApXG4gICAgICAgIGNvbnN0IGR1Y2tDb3VudEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgZHVja0NvdW50SWNvbi5zcmMgPSBkdWNrTG9nbztcbiAgICAgICAgZHVja0NvdW50SWNvbi5jbGFzc0xpc3QuYWRkKFwiaWNvbk1pbmlcIik7XG4gICAgICAgIGl0ZW1DYXJkRHVja3NMYWJlbERpc3BsYXkuYXBwZW5kQ2hpbGQoZHVja0NvdW50SWNvbik7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlVGFza0xpc3REaXNwbGF5ID0gKCkgPT4ge1xuICAgIHJlZnJlc2hUYXNrTGlzdERpc3BsYXkoKTtcbiAgICBmb3IgKGxldCB0YXNrSXRlbSBvZiB0YXNrTGlzdC50YXNrSXRlbXMpIHtcbiAgICAgICAgY3JlYXRlVGFza0l0ZW1DYXJkRGlzcGxheSh0YXNrSXRlbSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGB0YXNrSXRlbSBjcmVhdGVkYCk7XG4gICAgfVxufVxuXG5jb25zdCByZWZyZXNoVGFza0xpc3REaXNwbGF5ID0gKCkgPT4ge1xuICAgIGluY29tcGxldGVUYXNrTGlzdERpc3BsYXkudGV4dENvbnRlbnQgPSBcIlwiO1xufVxuIiwiZXhwb3J0IGNsYXNzIFRhc2tJdGVtIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSxzY2hlZHVsZWREYXRlLHByb2plY3QsZHVja0NvdW50LGlzQ29tcGxldGVkKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZWREYXRlID0gc2NoZWR1bGVkRGF0ZTtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgdGhpcy5kdWNrQ291bnQgPSBkdWNrQ291bnQ7XG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZWQgPSBpc0NvbXBsZXRlZDtcbiAgICB9XG4gIH1cblxuXG5jbGFzcyBUYXNrTGlzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGFza0l0ZW1zID0gW107XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHRhc2tMaXN0ID0gbmV3IFRhc2tMaXN0O1xuXG50YXNrTGlzdC50YXNrSXRlbXNbMF0gPSBuZXcgVGFza0l0ZW0oXCJUYWtlIG91dCB0aGUgdHJhc2hcIiwgXCIxMi8wNC8yMDI0XCIsIFwiSG91c2VrZWVwaW5nXCIsIFwiMVwiLCBmYWxzZSk7XG50YXNrTGlzdC50YXNrSXRlbXNbMV0gPSBuZXcgVGFza0l0ZW0oXCJCcmluZyBkb2dnbyB0byB0aGUgdmV0XCIsIFwiMTUvMDQvMjAyNFwiLCBcIkhvdXNla2VlcGluZ1wiLCBcIjJcIiwgZmFsc2UpO1xudGFza0xpc3QudGFza0l0ZW1zWzJdID0gbmV3IFRhc2tJdGVtKFwiQ29tcGxldGUgZHVja3MgdG9kbyBwcm9qZWN0XCIsIFwiMTYvMDQvMjAyNFwiLCBcIldvcmtcIiwgXCI2XCIsIGZhbHNlKTtcbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
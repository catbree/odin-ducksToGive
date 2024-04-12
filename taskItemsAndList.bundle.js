"use strict";
(self["webpackChunkodin_duckstogive"] = self["webpackChunkodin_duckstogive"] || []).push([["taskItemsAndList"],{

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
  

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/taskItemsAndList.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza0l0ZW1zQW5kTGlzdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWR1Y2tzdG9naXZlLy4vc3JjL3Rhc2tJdGVtc0FuZExpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFRhc2tJdGVtIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSxzY2hlZHVsZWREYXRlLHByb2plY3QsZHVja0NvdW50LGlzQ29tcGxldGVkKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZWREYXRlID0gc2NoZWR1bGVkRGF0ZTtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgdGhpcy5kdWNrQ291bnQgPSBkdWNrQ291bnQ7XG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZWQgPSBpc0NvbXBsZXRlZDtcbiAgICB9XG4gIH1cblxuXG5jbGFzcyBUYXNrTGlzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGFza0l0ZW1zID0gW107XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHRhc2tMaXN0ID0gbmV3IFRhc2tMaXN0O1xuXG50YXNrTGlzdC50YXNrSXRlbXNbMF0gPSBuZXcgVGFza0l0ZW0oXCJUYWtlIG91dCB0aGUgdHJhc2hcIiwgXCIxMi8wNC8yMDI0XCIsIFwiSG91c2VrZWVwaW5nXCIsIFwiMVwiLCBmYWxzZSk7XG50YXNrTGlzdC50YXNrSXRlbXNbMV0gPSBuZXcgVGFza0l0ZW0oXCJCcmluZyBkb2dnbyB0byB0aGUgdmV0XCIsIFwiMTUvMDQvMjAyNFwiLCBcIkhvdXNla2VlcGluZ1wiLCBcIjJcIiwgZmFsc2UpO1xudGFza0xpc3QudGFza0l0ZW1zWzJdID0gbmV3IFRhc2tJdGVtKFwiQ29tcGxldGUgZHVja3MgdG9kbyBwcm9qZWN0XCIsIFwiMTYvMDQvMjAyNFwiLCBcIldvcmtcIiwgXCI2XCIsIGZhbHNlKTtcbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
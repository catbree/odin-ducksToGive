import './style.css';
import printMe from './navigations.js';
import printMe2 from './taskItem.js';
import addTask from './addTaskModal.js';

function component() {
    const element = document.createElement('div');
  
    return element;
  }
  
  document.body.appendChild(component());

  printMe();
  printMe2();
  addTask();

import './style.css';
import html from "./index.html";
import printMe from './navigations.js';

function component() {
    const element = document.createElement('div');
  
    return element;
  }
  
  document.body.appendChild(component());

  printMe();
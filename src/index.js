import './style.css';
import { data, arr } from './modules/variables.js';

arr.forEach((object) => {
  data.innerHTML += `
    <li class="${object.colour}">
    <p>${object.name}</p>
    <p>${object.value}</p>
  </li>
    `;
});
import './style.css';
import { data, arr } from './modules/variables.js';

arr.forEach((object) => {
  data.innerHTML += `
    <li>
    <p>${object.name}</p>
    <p>${object.value}</p>
  </li>
    `;
});
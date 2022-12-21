import './style.css';
import { renderContainer, toAddScore } from './modules/apis.js';

let gameIdentity = '';
fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {

  method: 'POST',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify({
    name: 'Premier League Pes',
  }),
}).then((res) => res.json())
  .then((gameID) => {
    const response = gameID.result;
    gameIdentity = response.substring(14, response.lastIndexOf(' '));
  });

const refresh = document.querySelector('.ref-btn');

refresh.addEventListener('click', () => {
  renderContainer(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameIdentity}/scores`);
});

const submitscore = document.getElementById('submit');
const yourName = document.getElementById('your-name');
const score = document.getElementById('score');
submitscore.addEventListener('click', (e) => {
  e.preventDefault();
  if (yourName.value !== '' && score.value !== '') {
    submitscore.classList.add('onfocuss');
    toAddScore(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameIdentity}/scores`, yourName.value, score.value);
    document.forms[0].reset();
  }
});
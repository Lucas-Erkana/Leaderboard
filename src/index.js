/* eslint-disable no-unused-vars */

import _ from 'lodash';
import './style.scss';
import addScore from './modules/add-score.js';
import renderScores from './modules/render-scores.js';
import {
  scoreList,
  refreshBtn,
  userName,
  userScore,
  submitBtn,
  theForm,
  gameName,
  gameHading,
  msg,
} from './modules/globals.js';
import { emptyMsg, errorMsg, successMsg } from './modules/messages.js';
import showGameName from './modules/show-game-name.js';

let gameURL = '';
fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify({
    name: 'The game is on',
  }),
})
  .then((res) => res.json())
  .then((game) => {
    const response = game.result;
    const gameId = response.substring(14, response.lastIndexOf(' '));
    gameURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;
  });

refreshBtn.addEventListener('click', () => {
  renderScores(gameURL, scoreList);
  msg.replaceChildren();
});

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (userName.value !== '' && userScore.value !== '') {
    addScore(gameURL, userName.value, userScore.value);
    theForm.reset();
    successMsg(msg);
    setTimeout(() => {
      renderScores(gameURL, scoreList);
    }, 1000);
  } else {
    errorMsg(msg);
  }
});
userName.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    userScore.focus();
  }
});
userScore.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    submitBtn.click();
    userName.focus();
  }
});
window.onload = () => {
  emptyMsg(scoreList);
  showGameName(gameHading, gameName);
};

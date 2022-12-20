import './style.css';
import {bodyCont} from './modules/variables.js';
  bodyCont.innerHTML =`
  <h1>Leaderboard</h1>
    <div class="sec-cont">
      <section class="sec1">
        <div class="sec1-title">
          <h3>Recent scores</h3>
          <button>Refresh</button>
        </div>
        <ul>
          <li>
            <p>Name:</p>
            <p>100</p>
          </li>
          <li class="colored">
            <p>Name:</p>
            <p>20</p>
          </li>
          <li>
            <p>Name:</p>
            <p>50</p>
          </li>
          <li class="colored">
            <p>Name:</p>
            <p>78</p>
          </li>
          <li>
            <p>Name:</p>
            <p>125</p>
          </li>
          <li class="colored">
            <p>Name:</p>
            <p>77</p>
          </li>
          <li>
            <p>Name:</p>
            <p>42</p>
          </li>
        </ul>
      </section>
      <section class="sec2">
        <h3>Add your score</h3>
        <form action="">
          <input type="text" placeholder="Your name">
          <input type="text" placeholder="Your score">
          <button class="btn-last">Submit</button>
        </form>
      </section>
    </div>
  `;

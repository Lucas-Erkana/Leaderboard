const container = document.querySelector('.list-cont');

const renderContainer = async (gameLInk) => {
  const res = await fetch(gameLInk);
  await res.json()
    .then((resData) => {
      container.replaceChildren();
      let counts = 1;
      resData.result.forEach((scores, index) => {
        container.innerHTML += `
          <li>
            <p>${scores.user}:</p>
            <p>${scores.score}</p>
          </li> `;
        container.classList.add('conta');
        if (counts % 2 === 0) {
          container.children[index].classList.add('colored');
        } else {
          container.children[index].classList.add('not-colored');
        }

        counts += 1;
      });
    });
};

const toAddScore = async (gameLInk, user, score) => {
  await fetch(gameLInk, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user,
      score,
    }),
  });
};

export { renderContainer, toAddScore };
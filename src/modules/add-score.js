const addScore = async (gameLink, user, score) => {
  await fetch(gameLink, {
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
export default addScore;

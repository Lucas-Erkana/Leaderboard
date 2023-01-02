const successMsg = (parent) => {
    if (parent.hasChildNodes()) {
      parent.replaceChildren();
    }
    const success = document.createElement('p');
    success.id = 'success';
    success.classList.add('messages');
    success.innerHTML = 'Score added successfully';
    parent.appendChild(success);
  };
  const errorMsg = (parent) => {
    if (parent.hasChildNodes()) {
      parent.replaceChildren();
    }
    const error = document.createElement('p');
    error.id = 'error';
    error.classList.add('messages');
    error.innerHTML = 'All fields are required';
    parent.appendChild(error);
  };
  
  const emptyMsg = (parent) => {
    if (!parent.hasChildNodes()) {
      // scoreList.style.border = "none";
      parent.innerHTML = '<p class="empty-message">The leaderboard is empty</p>';
    }
  };
  export { successMsg, errorMsg, emptyMsg };
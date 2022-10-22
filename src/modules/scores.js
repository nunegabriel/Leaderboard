const displayScores = (scores) => {
  const scoresContainer = document.querySelector('.board');
  let listDiv = '';
  scores.sort((a, b) => b.score - a.score);
  scores.forEach((score) => {
    listDiv += `
        <div class="field">
        ${score.user} : ${score.score}
        </div>
        `;
  });

  scoresContainer.innerHTML = listDiv;
};

export default displayScores;
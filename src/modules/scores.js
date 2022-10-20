const scores = [
  { name: 'Name', score: 20 },
  { name: 'Name', score: 20 },
  { name: 'Name', score: 10 },
  { name: 'Name', score: 20 },
  { name: 'Name', score: 20 },
  { name: 'Name', score: 20 },
  { name: 'Name', score: 20 },
];

const displayScore = () => {
  let listDiv = '';
  const board = document.querySelector('.board');
  scores.forEach((score) => {
    listDiv += `
        <div class="field">
        ${score.name} : ${score.score}
        </div>
        `;
  });

  board.innerHTML = listDiv;
};

export default displayScore;

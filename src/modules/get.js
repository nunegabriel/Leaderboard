import displayScores from './scores';

const getFunction = async () => {
  try {
    const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/sgHykCsVf9ni8FX5zc7M/scores');
    const data = await res.json();

    if (!res.ok) {
      alert(data.descrption);
      return;
    }

    displayScores(data.result);
  } catch (error) {
    alert('error');
  }
};

export default getFunction;

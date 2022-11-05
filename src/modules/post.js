const postFunction = async (user, score) => {
  try {
    const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/sgHykCsVf9ni8FX5zc7M/scores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
          user,
          score,
        },
      ),
    });
    const data = await res.json();

    if (!res.ok) {
      alert(data.descrption);
      return;
    }
  } catch (error) {
    alert(error);
  }
};

export default postFunction;
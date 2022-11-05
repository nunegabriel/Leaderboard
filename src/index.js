import './style.css';
import postFunction from './modules/post';
import getFunction from './modules/get';

const refresh = document.querySelector('.btn-1');

const form = document.querySelector('form');

refresh.addEventListener('click', getFunction);

getFunction();

form.onsubmit = (e) => {
  e.preventDefault();
  const user = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  postFunction(user, score);
  form.reset();
};
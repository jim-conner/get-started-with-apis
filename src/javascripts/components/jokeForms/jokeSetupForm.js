import getJokes from '../../helpers/data/jokesData';

let joke = {};

const setupJoke = () => {
  getJokes().then((response) => {
    joke = response;
    document.querySelector('#setup').innerHTML = `<h5>${(joke.setup).toUpperCase()}</h5>`;
    document.querySelector('#button-container').innerHTML = `
    <button id="punchline-button" type="joke-button" class="btn btn-dark">GET A PUNCHLINE</button>
    `;
  });
};

const punchlineJoke = () => {
  document.querySelector('#punchline').innerHTML = `<h5>${(joke.punchline).toUpperCase()}</h5>`;
  document.querySelector('#button-container').innerHTML = `
  <button id="restart-button" type="restart-button" class="btn btn-dark">GET A NEW JOKE</button>
  `;
};

const restartJoke = () => {
  document.querySelector('#punchline').innerHTML = '';
  document.querySelector('#setup').innerHTML = '';
  document.querySelector('#button-container').innerHTML = `
  <button id="joke-button" type="joke-button" class="btn btn-dark">GET A JOKE</button>
  `;
};

export {
  setupJoke,
  punchlineJoke,
  restartJoke
};

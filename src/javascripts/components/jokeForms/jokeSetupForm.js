import { getJokes, getPunchline } from '../../helpers/data/jokesData';

const setupJoke = () => {
  let joke = {};
  getJokes().then((response) => {
    joke = response;
    // document.querySelector('#punchline-button').innerHTML = '';
    document.querySelector('#setup').innerHTML = `<h5>${joke.setup}</h5>`;
    // document.querySelector('#punchline').innerHTML = `<h5>${joke.punchline}</h5>`;
    // document.querySelector('#punchline').innerHTML = '';
    document.querySelector('#button-container').innerHTML = `
          <button id="punchline-button" type="joke-button" class="btn btn-dark">GET A PUNCHLINE</button>
          `;
  });
};

const punchlineJoke = () => {
  getPunchline().then(() => {
  //   // joke = response;
  //   // document.querySelector('#punchline-button').innerHTML = '';
  //   // document.querySelector('#setup').innerHTML = `<h5>${joke.setup}</h5>`;
  //   document.querySelector('#punchline').innerHTML = `<h5>${joke.punchline}</h5>`;
  //   // document.querySelector('#punchline').innerHTML = '';
  //   document.querySelector('#button-container').innerHTML = `
  //         <button id="punchline-button" type="joke-button" class="btn btn-dark">GET A PUNCHLINE</button>
  //         `;
  });
};
export { setupJoke, punchlineJoke };

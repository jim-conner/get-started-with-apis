import getJokes from '../../helpers/data/jokesData';

const setupJoke = () => {
  let joke = {};
  getJokes().then((response) => {
    joke = response;
    console.warn(joke.setup);
    document.querySelector('#setup').innerHTML = `<h5>${joke.setup}</h5>`;
  });
};

export default setupJoke;

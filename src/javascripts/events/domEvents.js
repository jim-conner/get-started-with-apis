import setupJoke from '../components/jokeForms/jokeSetupForm';
// import getJokes from '../helpers/data/jokesData';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.id.includes('joke-button')) {
      // setupJoke();
      console.warn(setupJoke());
    }
  });
};

export default domEvents;

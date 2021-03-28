import { setupJoke, punchlineJoke, restartJoke } from '../components/jokeForms/jokeSetupForm';
// import buildJoke from '../components/jokeForms/jokeScreen';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.id.includes('joke-button')) {
      setupJoke();
    }

    if (e.target.id.includes('punchline-button')) {
      punchlineJoke();
    }

    if (e.target.id.includes('restart-button')) {
      // document.querySelector('joke-container').innerHTML = '';
      restartJoke();
    }
  });
};

export default domEvents;

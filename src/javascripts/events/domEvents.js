import { setupJoke, punchlineJoke } from '../components/jokeForms/jokeSetupForm';
import buildJoke from '../components/jokeForms/jokeScreen';

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
      // document.querySelector('joke-card').innerHTML = '';
      buildJoke();
    }
  });
};

export default domEvents;

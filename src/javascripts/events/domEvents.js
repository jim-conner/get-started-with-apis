import { setupJoke, punchlineJoke, restartJoke } from '../components/jokeForms/jokeSetupForm';

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
      restartJoke();
    }
  });
};

export default domEvents;

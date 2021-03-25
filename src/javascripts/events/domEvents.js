import getJokes from '../helpers/data/jokesData';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.id.includes('joke-button')) {
      getJokes();
    }
  });
};

export default domEvents;

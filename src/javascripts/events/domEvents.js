// import getJokes from '../helpers/data/jokesData';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.id.includes('joke-button')) {
      // const jokeObject = {
      //   jokeName: document.querySelector('#setup').value,
      //   jokeImageURL: document.querySelector('#punchline').value
      // };
      // addRides(rideObject).then((ridesArray) => createRides(ridesArray));
    }
  });
};

export default domEvents;

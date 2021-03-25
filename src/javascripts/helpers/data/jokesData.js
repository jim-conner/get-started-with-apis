import axios from 'axios';

const dbUrl = 'https://official-joke-api.appspot.com';

const getJokes = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/random_joke`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
  console.warn(`${dbUrl}/random_joke`);
});

export default getJokes;

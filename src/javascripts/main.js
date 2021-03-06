// USE WITH FIREBASE AUTH
// import checkLoginStatus from './helpers/auth';
import 'bootstrap';
import '../styles/main.scss';
import buildDom from './components/buildDom';
import buildJoke from './components/jokeForms/jokeScreen';
import domEvents from './events/domEvents';

const init = () => {
  buildDom();
  buildJoke();
  domEvents();

  // USE WITH FIREBASE AUTH
  // checkLoginStatus();
};

init();

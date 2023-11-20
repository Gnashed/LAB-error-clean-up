import '../styles/main.scss';

// Importing components
import htmlStructure from '../components/htmlStructure';
import header from '../components/header';
import startSortingBtn from '../components/startSortingBtn';

// Importing Utils
import events from '../utils/events';

const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  events(); // always load last
};

startApp();

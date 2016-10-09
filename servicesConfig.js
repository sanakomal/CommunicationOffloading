import news from './server/services/news';
import upcomingseries from './server/services/upcomingseries'

function initServices() {
  news();
  upcomingseries();
}

export default initServices;

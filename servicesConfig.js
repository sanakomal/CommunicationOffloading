import news from './server/services/news';
import upcomingseries from './server/services/upcomingseries';
import ongoingseries from './server/services/ongoingseries';
import teamafghanistan from './server/services/teamafghanistan';
import teamaustralia from './server/services/teamaustralia';
import teambangladesh from './server/services/teambangladesh';
import teamengland from './server/services/teamengland';
import teamindia from './server/services/teamindia';
import teamireland from './server/services/teamireland';
import teamnz from './server/services/teamnz';
import teampakistan from './server/services/teampakistan';
import teamscotland from './server/services/teamscotland';
import teamsouthafrica from './server/services/teamsouthafrica';
import teamsrilanka from './server/services/teamsrilanka';
import teamuae from './server/services/teamuae';
import teamwestindies from './server/services/teamwestindies';
import teamzimbabwe from './server/services/teamzimbabwe';
import livescores from './server/services/livescores';

function initServices() {
  news();
  upcomingseries();
  ongoingseries();
  teamafghanistan();
  teamaustralia();
  teambangladesh();
  teamengland();
  teamindia();
  teamireland();
  teamnz();
  teampakistan();
  teamscotland();
  teamsouthafrica();
  teamsrilanka();
  teamuae();
  teamwestindies();
  teamzimbabwe();
  livescores();
}

export default initServices;

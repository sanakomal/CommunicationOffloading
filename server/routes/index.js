import express from 'express';
import newsRoutes from './news';
import upcomingseriesRoutes from './upcomingseries';
import ongoingseriesRoutes from './ongoingseries';
import teamafghanistanRoutes from './teamafghanistan';
import teamaustraliaRoutes from './teamaustralia';
import teambangladeshRoutes from './teambangladesh';
import teamenglandRoutes from './teamengland';
import teamindiaRoutes from './teamindia';
import teamirelandRoutes from './teamireland';
import teamnzRoutes from './teamnz';
import teampakistanRoutes from './teampakistan';
import teamscotlandRoutes from './teamscotland';
import teamsouthafricaRoutes from './teamsouthafrica';
import teamsrilankaRoutes from './teamsrilanka';
import teamuaeRoutes from './teamuae';
import teamwestindiesRoutes from './teamwestindies';
import teamzimbabweRoutes from './teamzimbabwe';
import livescoresRoutes from './livescores';

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

router.use('/news', newsRoutes);
router.use('/upcomingseries', upcomingseriesRoutes);
router.use('/ongoingseries', ongoingseriesRoutes);
router.use('/teamafghanistan', teamafghanistanRoutes);
router.use('/teamaustralia',teamaustraliaRoutes);
router.use('/teambangladesh',teambangladeshRoutes);
router.use('/teamengland',teamenglandRoutes);
router.use('/teamindia',teamindiaRoutes);
router.use('/teamireland',teamirelandRoutes);
router.use('/teamnz',teamnzRoutes);
router.use('/teampakistan',teampakistanRoutes);
router.use('/teamscotland',teamscotlandRoutes);
router.use('/teamsouthafrica',teamsouthafricaRoutes);
router.use('/teamsrilanka',teamsrilankaRoutes);
router.use('/teamuae',teamuaeRoutes);
router.use('/teamwestindies',teamwestindiesRoutes);
router.use('/teamzimbabwe',teamzimbabweRoutes);
router.use('/livescores',livescoresRoutes);

export default router;

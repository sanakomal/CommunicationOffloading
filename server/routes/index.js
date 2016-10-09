import express from 'express';
import newsRoutes from './news';
import upcomingseriesRoutes from './upcomingseries'

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

router.use('/news', newsRoutes);
router.use('/upcomingseries', upcomingseriesRoutes);

export default router;

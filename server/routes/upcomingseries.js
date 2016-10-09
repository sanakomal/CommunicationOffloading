import express from 'express';
import upcomingseries from '../controllers/upcomingseries';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/').get(upcomingseries.get);

export default router;

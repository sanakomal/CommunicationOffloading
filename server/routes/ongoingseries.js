import express from 'express';
import ongoingseries from '../controllers/ongoingseries';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/').get(ongoingseries.get);

export default router;

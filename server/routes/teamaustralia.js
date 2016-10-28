import express from 'express';
import teamaustralia from '../controllers/teamaustralia';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/').get(teamaustralia.get);

export default router;

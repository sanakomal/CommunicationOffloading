import express from 'express';
import teamafghanistan from '../controllers/teamafghanistan';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/').get(teamafghanistan.get);

export default router;

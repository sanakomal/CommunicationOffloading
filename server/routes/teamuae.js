import express from 'express';
import teamuae from '../controllers/teamuae';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/').get(teamuae.get);

export default router;

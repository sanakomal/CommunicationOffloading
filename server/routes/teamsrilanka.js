import express from 'express';
import teamsrilanka from '../controllers/teamsrilanka';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/').get(teamsrilanka.get);

export default router;

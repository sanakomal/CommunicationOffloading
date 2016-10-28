import express from 'express';
import teamzimbabwe from '../controllers/teamzimbabwe';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/').get(teamzimbabwe.get);

export default router;

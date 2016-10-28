import express from 'express';
import teamwestindies from '../controllers/teamwestindies';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/').get(teamwestindies.get);

export default router;

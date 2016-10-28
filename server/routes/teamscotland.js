import express from 'express';
import teamscotland from '../controllers/teamscotland';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/').get(teamscotland.get);

export default router;

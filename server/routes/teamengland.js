import express from 'express';
import teamengland from '../controllers/teamengland';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/').get(teamengland.get);

export default router;

import express from 'express';
import teamireland from '../controllers/teamireland';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/').get(teamireland.get);

export default router;

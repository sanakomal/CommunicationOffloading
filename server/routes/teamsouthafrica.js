import express from 'express';
import teamsouthafrica from '../controllers/teamsouthafrica';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/').get(teamsouthafrica.get);

export default router;

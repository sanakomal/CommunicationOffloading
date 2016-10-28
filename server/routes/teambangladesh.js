import express from 'express';
import teambangladesh from '../controllers/teambangladesh';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/').get(teambangladesh.get);

export default router;

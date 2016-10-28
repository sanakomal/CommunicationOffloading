import express from 'express';
import teamnz from '../controllers/teamnz';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/').get(teamnz.get);

export default router;

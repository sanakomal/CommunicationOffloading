import express from 'express';
import teampakistan from '../controllers/teampakistan';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/').get(teampakistan.get);

export default router;

import express from 'express';
import teamindia from '../controllers/teamindia';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/').get(teamindia.get);

export default router;

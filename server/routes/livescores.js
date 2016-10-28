import express from 'express';
import livescores from '../controllers/livescores';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/').get(livescores.get);

export default router;

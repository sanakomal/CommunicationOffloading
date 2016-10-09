import express from 'express';
import news from '../controllers/news';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/').get(news.get);

export default router;

import News from '../models/news';
import errorHandler from '../../global/handlers/errorHandler';

function get(req, res) {
  return News.find((err, news) => {
    if (err) {
      return res.json(errorHandler.NEWS);
    }
    const payload = {
    	item: news
    };
    return res.json(payload);
  });
}

export default { get };


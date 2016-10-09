import News from '../models/news';
import errorHandler from '../../global/handlers/errorHandler';

function get(req, res) {
  return News.find((err, news) => {
    if (err) {
      return res.json(errorHandler.NEWS);
    }
    return res.json(news);
  });
}

export default { get };


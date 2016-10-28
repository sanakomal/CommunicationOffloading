import OngoingSeries from '../models/ongoingseries';
import errorHandler from '../../global/handlers/errorHandler';

function get(req, res) {
  return OngoingSeries.find((err, ongoingseries) => {
    if (err) {
      return res.json(errorHandler.ONGOINGSERIES);
    }
     const payload = {
    	Series: ongoingseries
    };
    return res.json(payload);
  });
}

export default { get };


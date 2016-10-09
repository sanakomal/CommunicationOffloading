import UpcomingSeries from '../models/upcomingseries';
import errorHandler from '../../global/handlers/errorHandler';

function get(req, res) {
  return UpcomingSeries.find((err, upcomingseries) => {
    if (err) {
      return res.json(errorHandler.UPCOMINGSERIES);
    }
    return res.json(upcomingseries);
  });
}

export default { get };


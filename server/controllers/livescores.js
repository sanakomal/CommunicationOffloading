import LiveScores from '../models/livescores';
import errorHandler from '../../global/handlers/errorHandler';

function get(req, res) {
  return LiveScores.find((err, livescores) => {
    if (err) {
      return res.json(errorHandler.LIVESCORES);
    }
    const payload = {
    	Scorecard: livescores
    };
    return res.json(payload);
  });
}

export default { get };


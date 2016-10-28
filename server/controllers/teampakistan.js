import TeamPakistan from '../models/teampakistan';
import errorHandler from '../../global/handlers/errorHandler';

function get(req, res) {
  return TeamPakistan.find((err, teampakistan) => {
    if (err) {
      return res.json(errorHandler.TEAMPAKISTAN);
    }
    const payload = {
    	Players: teampakistan
    };
    return res.json(payload);
  });
}

export default { get };


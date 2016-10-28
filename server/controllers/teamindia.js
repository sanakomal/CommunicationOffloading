import TeamIndia from '../models/teamindia';
import errorHandler from '../../global/handlers/errorHandler';

function get(req, res) {
  return TeamIndia.find((err, teamindia) => {
    if (err) {
      return res.json(errorHandler.TEAMINDIA);
    }
     const payload = {
    	Players: teamindia
    };
    return res.json(payload);
  });
}

export default { get };


import TeamBangladesh from '../models/teambangladesh';
import errorHandler from '../../global/handlers/errorHandler';

function get(req, res) {
  return TeamBangladesh.find((err, teambangladesh) => {
    if (err) {
      return res.json(errorHandler.TEAMBANGLADESH);
    }
     const payload = {
    	Players: teambangladesh
    };
    return res.json(payload);
  });
}

export default { get };


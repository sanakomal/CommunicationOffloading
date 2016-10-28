import TeamNZ from '../models/teamnz';
import errorHandler from '../../global/handlers/errorHandler';

function get(req, res) {
  return TeamNZ.find((err, teamnz) => {
    if (err) {
      return res.json(errorHandler.TEAMNZ);
    }
     const payload = {
    	Players: teamnz
    };
    return res.json(payload);
  });
}

export default { get };


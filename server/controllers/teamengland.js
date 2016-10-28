import TeamEngland from '../models/teamengland';
import errorHandler from '../../global/handlers/errorHandler';

function get(req, res) {
  return TeamEngland.find((err, teamengland) => {
    if (err) {
      return res.json(errorHandler.TEAMENGLAND);
    }
     const payload = {
    	Players: teamengland
    };
    return res.json(payload);
  });
}

export default { get };


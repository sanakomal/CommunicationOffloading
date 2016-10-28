import TeamScotland from '../models/teamscotland';
import errorHandler from '../../global/handlers/errorHandler';

function get(req, res) {
  return TeamScotland.find((err, teamscotland) => {
    if (err) {
      return res.json(errorHandler.TEAMSCOTLAND);
    }
     const payload = {
    	Players: teamscotland
    };
    return res.json(payload);
  });
}

export default { get };


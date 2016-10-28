import TeamWestIndies from '../models/teamwestindies';
import errorHandler from '../../global/handlers/errorHandler';

function get(req, res) {
  return TeamWestIndies.find((err, teamwestindies) => {
    if (err) {
      return res.json(errorHandler.TEAMWESTINDIES);
    }
     const payload = {
    	Players: teamwestindies
    };
    return res.json(payload);
  });
}

export default { get };


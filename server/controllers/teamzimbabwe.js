import TeamZimbabwe from '../models/teamzimbabwe';
import errorHandler from '../../global/handlers/errorHandler';

function get(req, res) {
  return TeamZimbabwe.find((err, teamzimbabwe) => {
    if (err) {
      return res.json(errorHandler.TEAMZIMBABWE);
    }
   // return res.json(teamzimbabwe);
    const payload = {
    	Players: teamzimbabwe
    };
    return res.json(payload);
  });
}

export default { get };


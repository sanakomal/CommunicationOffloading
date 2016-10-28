import TeamAfghanistan from '../models/teamafghanistan';
import errorHandler from '../../global/handlers/errorHandler';

function get(req, res) {
  return TeamAfghanistan.find((err, teamafghanistan) => {
    if (err) {
      return res.json(errorHandler.TEAMAFGHANISTAN);
    }
     const payload = {
    	Players: teamafghanistan
    };
    return res.json(payload);
  });
}

export default { get };


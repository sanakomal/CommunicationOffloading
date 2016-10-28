import TeamSrilanka from '../models/teamsrilanka';
import errorHandler from '../../global/handlers/errorHandler';

function get(req, res) {
  return TeamSrilanka.find((err, teamsrilanka) => {
    if (err) {
      return res.json(errorHandler.TEAMSRILANKA);
    }
     const payload = {
    	Players: teamsrilanka
    };
    return res.json(payload);
  });
}

export default { get };


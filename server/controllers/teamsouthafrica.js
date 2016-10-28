import TeamSouthAfrica from '../models/teamsouthafrica';
import errorHandler from '../../global/handlers/errorHandler';

function get(req, res) {
  return TeamSouthAfrica.find((err, teamsouthafrica) => {
    if (err) {
      return res.json(errorHandler.TEAMSOUTHAFRICA);
    }
    const payload = {
    	Players: teamsouthafrica
    };
    return res.json(payload);
  });
}

export default { get };


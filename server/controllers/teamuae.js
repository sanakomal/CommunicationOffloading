import TeamUAE from '../models/teamuae';
import errorHandler from '../../global/handlers/errorHandler';

function get(req, res) {
  return TeamUAE.find((err, teamuae) => {
    if (err) {
      return res.json(errorHandler.TEAMUAE);
    }
    const payload = {
    	Players: teamuae
    };
    return res.json(payload);
  });
}

export default { get };


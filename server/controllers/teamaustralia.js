import TeamAustralia from '../models/teamaustralia';
import errorHandler from '../../global/handlers/errorHandler';

function get(req, res) {
  return TeamAustralia.find((err, teamaustralia) => {
    if (err) {
      return res.json(errorHandler.TEAMAUSTRALIA);
    }
    const payload = {
    	Players: teamaustralia
    };
    return res.json(payload);
  });
}

export default { get };


import TeamIreland from '../models/teamireland';
import errorHandler from '../../global/handlers/errorHandler';

function get(req, res) {
  return TeamIreland.find((err, teamireland) => {
    if (err) {
      return res.json(errorHandler.TEAMIRELAND);
    }
     const payload = {
    	Players: teamireland
    };
    return res.json(payload);
  });
}

export default { get };


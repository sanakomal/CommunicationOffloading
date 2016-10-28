import get from 'lodash/get';
import find from 'lodash/find';
import isUndefined from 'lodash/isUndefined';
import map from 'lodash/map';
import request from 'request';
import baseUrl from '../../apiConfig';
import parse from '../../global/handlers/jsonHandler';
import api from '../../global/api';
import TeamWestIndies from '../models/teamwestindies';

function fetch() {
  return request.get({
    url: `${baseUrl}/${api.TEAMWESTINDIES}`,
    headers: {
      Accept: 'application/json'
    }
  }, (err, httpResponse, body) => {
    if (err) {
      /* eslint-disable no-console */
      console.error(err);
      /* eslint-enable no-console */
    }
    if (!isUndefined(body)) {
     // console.log(body);
      save(parse(body));
    }
  });
}

function save(data) {
  const results = get(data, 'query.results.TeamProfile.Players'); // get act as helper function here
 console.log(results);
  return TeamWestIndies.find((err, teamwestindies) => {
    if (!err) {
      return map(results.Player, (player) => {
       // console.log(results.player)
        let teamwestindies_ = find(teamwestindies, { TeamId: player.personid });
        if (isUndefined(teamwestindies_)) { 
          const latestTeam = new TeamWestIndies({
              TeamId: player.personid,
              FirstName: player.FirstName,
              LastName: player.LastName,
          });
          latestTeam.save();
        }
          if (teamwestindies_) {
          TeamWestIndies.findOneAndUpdate({ 'TeamId': teamwestindies_.personid }, {
            $set: {
             TeamId: player.personid,
              FirstName: player.FirstName,
              LastName: player.LastName,
            }
          }).exec();
        }
      });
    }
  });
}

function poll() {
  fetch();
  setTimeout(() => {
    poll();
  }, 10000);
}

export default poll;

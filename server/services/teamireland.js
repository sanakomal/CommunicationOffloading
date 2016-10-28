import get from 'lodash/get';
import find from 'lodash/find';
import isUndefined from 'lodash/isUndefined';
import map from 'lodash/map';
import request from 'request';
import baseUrl from '../../apiConfig';
import parse from '../../global/handlers/jsonHandler';
import api from '../../global/api';
import TeamIreland from '../models/teamireland';

function fetch() {
  return request.get({
    url: `${baseUrl}/${api.TEAMIRELAND}`,
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
  return TeamIreland.find((err, teamireland) => {
    if (!err) {
      return map(results.Player, (player) => {
       // console.log(results.player)
        let teamireland_ = find(teamireland, { TeamId: player.personid });
        if (isUndefined(teamireland_)) { 
          const latestTeam = new TeamIreland({
              TeamId: player.personid,
              FirstName: player.FirstName,
              LastName: player.LastName,
          });
          latestTeam.save();
        }
          if (teamireland_) {
          TeamIreland.findOneAndUpdate({ 'TeamId': teamireland_.personid }, {
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

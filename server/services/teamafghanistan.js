import get from 'lodash/get';
import find from 'lodash/find';
import isUndefined from 'lodash/isUndefined';
import map from 'lodash/map';
import request from 'request';
import baseUrl from '../../apiConfig';
import parse from '../../global/handlers/jsonHandler';
import api from '../../global/api';
import TeamAfghanistan from '../models/teamafghanistan';

function fetch() {
  return request.get({
    url: `${baseUrl}/${api.TEAMAFGHANISTAN}`,
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
      console.log(body);
      save(parse(body));
    }
  });
}

function save(data) {
  const results = get(data, 'query.results.TeamProfile.Players'); // get act as helper function here
  return TeamAfghanistan.find((err, teamafghanistan) => {
    if (!err) {
      return map(results.Player, (player) => {
        console.log(results.player)
        let teamafghanistann = find(teamafghanistan, { TeamId: player.personid });
        if (isUndefined(teamafghanistann)) { 
          const latestTeam = new TeamAfghanistan({
              TeamId: player.personid,
              FirstName: player.FirstName,
              LastName: player.LastName,
          });
          latestTeam.save();
        }
          if (teamafghanistann) {
          TeamAfghanistan.findOneAndUpdate({ 'TeamId': teamafghanistann.personid }, {
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

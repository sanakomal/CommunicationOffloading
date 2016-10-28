import get from 'lodash/get';
import find from 'lodash/find';
import isUndefined from 'lodash/isUndefined';
import map from 'lodash/map';
import request from 'request';
import baseUrl from '../../apiConfig';
import parse from '../../global/handlers/jsonHandler';
import api from '../../global/api';
import TeamIndia from '../models/teamindia';

function fetch() {
  return request.get({
    url: `${baseUrl}/${api.TEAMINDIA}`,
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
  return TeamIndia.find((err, teamindia) => {
    if (!err) {
      return map(results.Player, (player) => {
      //  console.log(results.player)
        let teamindiaa = find(teamindia, { TeamId: player.personid });
        if (isUndefined(teamindiaa)) { 
          const latestTeam = new TeamIndia({
              TeamId: player.personid,
              FirstName: player.FirstName,
              LastName: player.LastName,
          });
          latestTeam.save();
        }
          if (teamindiaa) {
          TeamIndia.findOneAndUpdate({ 'TeamId': teamindiaa.personid }, {
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

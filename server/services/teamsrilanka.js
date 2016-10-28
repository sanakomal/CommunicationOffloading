import get from 'lodash/get';
import find from 'lodash/find';
import isUndefined from 'lodash/isUndefined';
import map from 'lodash/map';
import request from 'request';
import baseUrl from '../../apiConfig';
import parse from '../../global/handlers/jsonHandler';
import api from '../../global/api';
import TeamSrilanka from '../models/teamsrilanka';

function fetch() {
  return request.get({
    url: `${baseUrl}/${api.TEAMSRILANKA}`,
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
  return TeamSrilanka.find((err, teamsrilanka) => {
    if (!err) {
      return map(results.Player, (player) => {
       // console.log(results.player)
        let teamsrilanka_ = find(teamsrilanka, { TeamId: player.personid });
        if (isUndefined(teamsrilanka_)) { 
          const latestTeam = new TeamSrilanka({
              TeamId: player.personid,
              FirstName: player.FirstName,
              LastName: player.LastName,
          });
          latestTeam.save();
        }
          if (teamsrilanka_) {
          TeamSrilanka.findOneAndUpdate({ 'TeamId': teamsrilanka_.personid }, {
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

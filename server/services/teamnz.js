import get from 'lodash/get';
import find from 'lodash/find';
import isUndefined from 'lodash/isUndefined';
import map from 'lodash/map';
import request from 'request';
import baseUrl from '../../apiConfig';
import parse from '../../global/handlers/jsonHandler';
import api from '../../global/api';
import TeamNZ from '../models/teamnz';

function fetch() {
  return request.get({
    url: `${baseUrl}/${api.TEAMNZ}`,
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
  return TeamNZ.find((err, teamnz) => {
    if (!err) {
      return map(results.Player, (player) => {
       // console.log(results.player)
        let teamnz_ = find(teamnz, { TeamId: player.personid });
        if (isUndefined(teamnz_)) { 
          const latestTeam = new TeamNZ({
              TeamId: player.personid,
              FirstName: player.FirstName,
              LastName: player.LastName,
          });
          latestTeam.save();
        }
          if (teamnz_) {
          TeamNZ.findOneAndUpdate({ 'TeamId': teamnz_.personid }, {
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

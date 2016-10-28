import get from 'lodash/get';
import find from 'lodash/find';
import _ from 'lodash';
import isUndefined from 'lodash/isUndefined';
import map from 'lodash/map';
import request from 'request';
import baseUrl from '../../apiConfig';
import parse from '../../global/handlers/jsonHandler';
import api from '../../global/api';
import LiveScores from '../models/livescores';

function fetch() {
  return request.get({
    url: `${baseUrl}/${api.LIVESCORES}`,
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
      save(parse(body));
    }
  });
}

function save(data) {
  const results = get(data, 'query.results'); // get act as helper function here
  // const results = data.query.results;

  return LiveScores.find((err, livescores) => {
    if (!err) {
      return map(results.Scorecard, (scorecard) => {
        let existingLivescores = find(livescores, { livescoresId: scorecard.newsid });
        if (isUndefined(existingLivescores)) {
          const latestLivescores = new LiveScores({
            livescoresId: scorecard.newsid,
            series_name: scorecard.series_name,
            stadium: scorecard.stadium,
            city: scorecard.city,
            country: scorecard.country,
            fn: scorecard.fn

            //  livescoresId: scorecard.newsid,
            // series_name: scorecard.series.series_name,
            // stadium: scorecard.place.stadium,
            // city: scorecard.place.city,
            // country: scorecard.place.country,
            // fn: scorecard.teams.fn
          });
          latestLivescores.save();
        }
        if (existingLivescores) {
          LiveScores.findOneAndUpdate({ 'livescoresId': existingLivescores.livescoresId }, {
            $set: {
              livescoresId: scorecard.newsid,
            series_name: scorecard.series_name,
            stadium: scorecard.stadium,
            city: scorecard.city,
            country: scorecard.country,
            fn: scorecard.fn
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

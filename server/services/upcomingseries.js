import get from 'lodash/get';
import find from 'lodash/find';
import _ from 'lodash';
import isUndefined from 'lodash/isUndefined';
import map from 'lodash/map';
import request from 'request';
import baseUrl from '../../apiConfig';
import parse from '../../global/handlers/jsonHandler';
import api from '../../global/api';
import News from '../models/news';

function fetch() {
  return request.get({
    url: `${baseUrl}/${api.UPCOMINGSERIES}`,
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

  return UpcomingSeries.find((err, upcomingseries) => {
    if (!err) {
      return map(results.item, (item) => {
        let existingseries = find(UPCOMINGSERIES, { useriesId: item.useriesid });
        if (isUndefined(existingseries)) {
          const latestSeries = new UpcomingSeries({
            useriesId: item.useriesid,
            SeriesName: item.SeriesName,
            StartDate: item.StartDate,
            EndDate: item.EndDate,
            Venue: item.Venue,
          });
          latestSeries.save();
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

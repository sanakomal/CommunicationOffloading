import get from 'lodash/get';
import find from 'lodash/find';
import isUndefined from 'lodash/isUndefined';
import map from 'lodash/map';
import request from 'request';
import baseUrl from '../../apiConfig';
import parse from '../../global/handlers/jsonHandler';
import api from '../../global/api';
import OngoingSeries from '../models/ongoingseries';

function fetch() {
  return request.get({
    url: `${baseUrl}/${api.ONGOINGSERIES}`,
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
      console.log(body)
      save(parse(body));
    }
  });
}

function save(data) {
  const results = get(data, 'query.results'); // get act as helper function here
  console.log(results)
  return OngoingSeries.find((err, ongoingseries) => {
    if (!err) {
      return map(results.Series, (series) => {
        let existingseries = find(ongoingseries, { SeriesId: series.SeriesId });
        if (isUndefined(existingseries)) { 
          const latestSeries = new OngoingSeries({
            useriesId: series.SeriesId,
            SeriesName: series.SeriesName,
            SeriesStartDate: series.StartDate,
            SeriesEndDate: series.EndDate,
            // MatchNo : series.Schedule.MatchNo,
            // StartDate: series.Schedule.StartDate,
            // EndDate: series.Schedule.EndDate,
            // Venue: series.Schedule.Venue,
          });
          latestSeries.save();
        }
          if (existingseries) {
          OngoingSeries.findOneAndUpdate({ 'SeriesId': existingseries.SeriesId }, {
            $set: {
            useriesId: series.SeriesId,
            SeriesName: series.SeriesName,
            SeriesStartDate: series.StartDate,
            SeriesEndDate: series.EndDate,
           // MatchNo : series.Schedule.MatchNo,
           //  StartDate: series.Schedule.StartDate,
           //  EndDate: series.Schedule.EndDate,
           //  Venue: series.Schedule.Venue,
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

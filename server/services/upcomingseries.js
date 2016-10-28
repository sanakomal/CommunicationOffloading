import get from 'lodash/get';
import find from 'lodash/find';
import isUndefined from 'lodash/isUndefined';
import map from 'lodash/map';
import request from 'request';
import baseUrl from '../../apiConfig';
import parse from '../../global/handlers/jsonHandler';
import api from '../../global/api';
import UpcomingSeries from '../models/upcomingseries';

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
  console.log(results)
  return UpcomingSeries.find((err, upcomingseries) => {
    if (!err) {
      return map(results.Series, (series) => {
        let existingseries = find(upcomingseries, { SeriesId: series.SeriesId });
        if (isUndefined(existingseries)) { 
          const latestSeries = new UpcomingSeries({
            useriesId: series.SeriesId,
            SeriesName: series.SeriesName,
            SeriesStartDate: series.SeriesStartDate,
            SeriesEndDate: series.SeriesEndDate,
            StartDate: series.StartDate,
            EndDate: series.EndDate,
            Venue: series.Venue,
          });
          latestSeries.save();
        }
          if (existingseries) {
          UpcomingSeries.findOneAndUpdate({ 'SeriesId': existingseries.SeriesId }, {
            $set: {
            useriesId: series.SeriesId,
            SeriesName: series.SeriesName,
            SeriesStartDate: series.SeriesStartDate,
            SeriesEndDate: series.SeriesEndDate,
            StartDate: series.StartDate,
            EndDate: series.EndDate,
            Venue: series.Venue,
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

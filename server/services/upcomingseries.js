import get from 'lodash/get';
import find from 'lodash/find';
import isUndefined from 'lodash/isUndefined';
import _ from 'lodash';
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
      //console.log(body);
    }
  });
}

function save(data) {
  const results = get(data, 'query.results'); // get act as helper function here
  //console.log(results)
  return UpcomingSeries.find((err, upcomingseries) => {
    if (!err) {
      return map(results.Series, (series) => {
        let existingseries = find(upcomingseries, { SeriesId: series.SeriesId });
        if (isUndefined(existingseries)) { 
          const latestSeries = new UpcomingSeries({
          
            SeriesId: series.SeriesId,
            SeriesName: series.SeriesName,
            SeriesStartDate: series.StartDate,
            SeriesEndDate: series.EndDate,
            team1: _.get(series, 'Participant.Team[0].Name'),
            team2: _.get(series, 'Participant.Team[1].Name'),
            MatchNo: _.get(series, 'Schedule.Match[0].MatchNo'),
            StartDate: _.get(series, 'Schedule.Match[0].StartDate'),
            EndDate: _.get(series, 'Schedule.Match[0].EndDate'),
            Venue: _.get(series, 'Schedule.Match[0].Venue[0].content'),
          });

          latestSeries.save();
        }
          if (existingseries) {
          UpcomingSeries.findOneAndUpdate({ 'SeriesId': existingseries.SeriesId }, {
            $set: {
            
            SeriesId: series.SeriesId,
            SeriesName: series.SeriesName,
            SeriesStartDate: series.StartDate,
            SeriesEndDate: series.EndDate,
            team1: _.get(series, 'Participant.Team[0].Name'),
            team2: _.get(series, 'Participant.Team[1].Name'),
            MatchNo: _.get(series, 'Schedule.Match[0].MatchNo'),
            StartDate: _.get(series, 'Schedule.Match[0].StartDate'),
            EndDate: _.get(series, 'Schedule.Match[0].EndDate'),
            Venue: _.get(series, 'Schedule.Match[0].Venue[0].content'),
            
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

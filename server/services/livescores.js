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
      console.error(err); // eslint-disable-line no-console
    }
    if (!isUndefined(body)) {
      console.log(body);
      save(parse(body));
    }
  });
}

function save(data) {
  const results = get(data, 'query.results');

  return LiveScores.find((err, livescores) => {
    if (!err) {
      return map(results.Scorecard, (scorecard) => {
        let existingLivescores = find(livescores, {
          seriesId: scorecard.series.series_id
        });
        if (isUndefined(existingLivescores)) {
          const latestLivescores = new LiveScores({
            seriesId: scorecard.series.series_id,
            series_name: scorecard.series.series_name,
            stadium: scorecard.place.stadium,
            city: scorecard.place.city,
            country: scorecard.place.country,
            date: scorecard.place.date,
            match: scorecard.mn,
            team1: scorecard.teams[0].fn,
            team2: scorecard.teams[1].fn,
            runs: _.get(scorecard, 'past_ings[0].s.a.r'),
            overs: _.get(scorecard, 'past_ings[0].s.a.o'),
            wickets: _.get(scorecard, 'past_ings[0].s.a.w'),
            cr: _.get(scorecard, 'past_ings[0].s.a.cr'),
            day: _.get(scorecard, 'past_ings[0].s.dm'),
    
             player1_name: _.get(scorecard, 'past_ings[0].d.a.t[0].name'),
             player1_runs: _.get(scorecard, 'past_ings[0].d.a.t[0].r'),
             player1_ball: _.get(scorecard, 'past_ings[0].d.a.t[0].b'),
             player1_four: _.get(scorecard, 'past_ings[0].d.a.t[0].four'),
             player1_six: _.get(scorecard, 'past_ings[0].d.a.t[0].six'),

              player2_name: _.get(scorecard, 'past_ings[1].d.a.t[1].name'),
              player2_runs: _.get(scorecard, 'past_ings[1].d.a.t[1].r'),
              player2_ball: _.get(scorecard, 'past_ings[1].d.a.t[1].b'),
              player2_four: _.get(scorecard, 'past_ings[1].d.a.t[1].four'),
              player2_six: _.get(scorecard, 'past_ings[1].d.a.t[1].six'),
          });

          latestLivescores.save();
        }
        if (existingLivescores) {
          LiveScores.findOneAndUpdate({
            seriesId: existingLivescores.seriesId }, {
            $set: {
              seriesId: scorecard.series.series_id,
              series_name: scorecard.series.series_name,
              stadium: scorecard.place.stadium,
              city: scorecard.place.city,
              country: scorecard.place.country,
              date: scorecard.place.date,
              match: scorecard.mn,
              team1: scorecard.teams[0].fn,
              team2: scorecard.teams[1].fn,
              runs: _.get(scorecard, 'past_ings[0].s.a.r'),
              overs: _.get(scorecard, 'past_ings[0].s.a.o'),
              wickets: _.get(scorecard, 'past_ings[0].s.a.w'),
              cr: _.get(scorecard, 'past_ings[0].s.a.cr'),
              day: _.get(scorecard, 'past_ings[0].s.dm'),

              player1_name: _.get(scorecard, 'past_ings[0].d.a.t[0].name'),
              player1_runs: _.get(scorecard, 'past_ings[0].d.a.t[0].r'),
              player1_ball: _.get(scorecard, 'past_ings[0].d.a.t[0].b'),
              player1_four: _.get(scorecard, 'past_ings[0].d.a.t[0].four'),
              player1_six: _.get(scorecard, 'past_ings[0].d.a.t[0].six'),

               player2_name: _.get(scorecard, 'past_ings[0].d.a.t[1].name'),
              player2_runs: _.get(scorecard, 'past_ings[0].d.a.t[1].r'),
              player2_ball: _.get(scorecard, 'past_ings[0].d.a.t[1].b'),
              player2_four: _.get(scorecard, 'past_ings[0].d.a.t[1].four'),
              player2_six: _.get(scorecard, 'past_ings[0].d.a.t[1].six'),
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
  }, 100000);
}

export default poll;
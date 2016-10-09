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
    url: `${baseUrl}/${api.NEWS}`,
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

  // TODO: Handle this with mongoose internal helpers.
  // Also, instead of assigning to properties, pass an object.
  /* eslint-disable consistent-return */
  /* eslint-disable array-callback-return */
  /* eslint-disable prefer-const */
  /* eslint-disable quote-props */
// News is database model
  return News.find((err, news) => {
    if (!err) {
      return map(results.item, (item) => {
        let existingNews = find(news, { newsId: item.newsid });
        if (isUndefined(existingNews)) {
          const latestNews = new News({
            newsId: item.newsid,
            author: item.author,
            link: item.link,
            pubDate: item.pubDate,
            title: item.title,
            description: item.description
          });
          latestNews.save();
        }
        if (existingNews) {
          News.findOneAndUpdate({ 'newsId': existingNews.newsId }, {
            $set: {
              newsId: item.newsid,
              author: item.author,
              link: item.link,
              pubDate: item.pubDate,
              title: item.title,
              description: item.description
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

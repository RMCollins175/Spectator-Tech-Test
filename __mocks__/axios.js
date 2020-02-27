import { results as articles } from './articles.json';

const NEWS_ARTICLES_ENDPOINT =
"http://newsapi.org/v2/top-headlines?country=gb&apiKey=e8d527c9872c46219461b1d3ac282653";

module.exports = {
  get: jest.fn((url) => {
    // eslint-disable-next-line default-case
    switch (url) {
      case NEWS_ARTICLES_ENDPOINT:
        return Promise.resolve({
          results: articles
        });
    }
  })
};
global.db = require('config/db');
const Article = require('models/article');
const querystring = require('querystring');
const url = require('url');
module.exports = function ArticleApi() {
  const seneca = this;
  seneca.add('articles:api,routes:index', (params, done) => {
    const {query} = url.parse(params['request$'].req.url);
    const {page = '1', per = '15'} = querystring.parse(query);
    Article
      .find()
      .skip(Number((page-1)*per))
      .limit(Number(per))
      .then((articles) => {
        done(null, {data: articles});
      })
      .catch((err) => {
        done(null, {error: err});
      })
  });
}

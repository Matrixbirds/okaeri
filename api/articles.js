global.db = require('config/db');
const Article = require('models/article');
const seneca = require('seneca')();

function ArticleSeneca() {
  const seneca = this;
  seneca.add('articles:paginator', (params, done) => {
    const {page = 1, per = 15} = params;
    Article
      .find()
      .skip(Number((page-1)*per))
      .limit(Number(per))
      .then((articles) => {
        done(null, {data: articles});
      })
      .catch((err) => {
        done(null, {error: `${err}`});
      })
  });
}

seneca
  .use(ArticleSeneca)
  .listen({type: 'http', port: 2333, pin: 'users:index'});

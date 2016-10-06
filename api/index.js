const seneca = require('seneca')();

const ArticleApi= require('api/article');

seneca
  .use(ArticleApi)
  .listen({type: 'http', port: 2333, pin: 'users:index'});

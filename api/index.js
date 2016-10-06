const seneca = require('seneca')();
const web = require('seneca-web');
const config = require('api/config');
const koa = require('koa')();

const ArticleApi = require('api/article');

seneca
  .use(ArticleApi)
  .use(web, config)
  .act('role:web', {routes: config.routes}, (err, reply) => {
    console.log(err || reply.routes);
  })
  .ready(() => {
    koa
      .use(seneca.export('web/context')().routes())
      .listen(2333);
  })

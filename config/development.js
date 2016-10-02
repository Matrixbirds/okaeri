'use strict';
const {
  koa,
  bodyParser,
  router,
  logger,
  hbsConfig
} = require('config/base');

const hbs = require('koa-hbs');
const app = koa();
app
  .use(bodyParser())
  .use(logger())
  .use(router().routes())
  .use(router().allowedMethods())
  .use(hbs.middleware(hbsConfig));

module.exports = app;

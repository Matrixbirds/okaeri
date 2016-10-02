'use strict';
global._ = require('lodash');
global.db = require('config/db');

module.exports = {
  koa: require('koa'),
  bodyParser: require('koa-bodyparser'),
  logger: require('koa-logger'),
  router: require('koa-router'),
  hbsConfig: require('config/hbs')
};

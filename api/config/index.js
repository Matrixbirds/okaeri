const Router = require('koa-router');
const koa = require('koa')();
module.exports = {
  adapter: require('seneca-web-adapter-koa1'),
  context: Router(),
  routes: require('api/config/routes')
}


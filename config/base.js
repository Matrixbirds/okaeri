'use strict';

if (!global.deps) {
  global.deps = {};
}

global.deps = {
  Koa: require('koa'),
  BodyParser: require('koa-bodyparser'),
  Logger: require('koa-logger'),
  Router: require('koa-router'),
  Mongoose:  require('mongoose')
};

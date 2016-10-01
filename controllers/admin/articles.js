const mongoose = require('mongoose');
const Article = require('models/article');
const bluebird = require('bluebird');

class Articles {
  static *index() {
    const articles = yield Article.find();
    this.status = 200;
    this.body = { data: articles };
  }

  static *show() {
  }

  static *destroy() {
  }

  static *search() {
  }

  static *create() {
  }

  static *update() {
  }
}

module.exports = Articles;
module.exports.router = require("koa-router")();

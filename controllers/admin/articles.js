const Article = require('models/article');

class Articles {
  static *index() {
    const articles = yield Article.find();
    this.status = 200;
    yield this.render('articles/index', { articles: articles });
  }

  static *show() {
    const article = yield Article.findById(this.params['id']);
    this.status = 200;
    console.log(article);
    yield this.render('articles/show', {  article: article });
  }

  static *destroy() {
  }

  static *search() {
  }

  static *new() {
    yield this.render('articles/new');
  }

  static *create() {
    let article = new Article(this.request.body["article"]);
    const result = yield article.save().catch((err) => false);
    if (result) {
      this.status = 201;
      this.redirect(`articles/${article.id}`);
    }
    else {
      this.status = 422;
      yield this.render(`articles/new`, { article: article });
    }
  }

  static *update() {
  }
}

module.exports = Articles;
module.exports.router = require("koa-router")();

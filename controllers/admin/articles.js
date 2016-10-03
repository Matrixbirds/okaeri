const Article = require('models/article');

class Articles {
  static *index() {
    const { page = 1, per = 10} = this.query
    const articles = yield Article.find().skip(Number((page-1)*per)).limit(Number(per));
    this.status = 200;
    const totalCount = yield Article.count();
    const totalPages = Math.ceil(totalCount / per);
    const articlePaginator = {
      articles: articles,
      page: page,
      per: per,
      totalPages: totalPages
    };
    if (page < totalPages) {
      Object.assign(articlePaginator, {nextPage: Number(page)+1});
    }
    if (page > 1) {
      Object.assign(articlePaginator, {prevPage: Number(page)-1});
    }
    yield this.render('articles/index', articlePaginator);
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

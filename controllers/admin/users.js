const User = require('models/user');

class Users {
  static *index() {
    const users = yield User.find();
    this.status = 200;
    yield this.render('users/index', { users: users });
  }

  static *show() {
    const user = yield User.findById(this.params['id']);
    if (user) {
      this.status = 200;
      yield this.render('users/show', { user: user });
    } else {
      this.status = 404;
      this.body = { data: `user's id=${this.params['id']} not found` }
    }
  }

  static *create() {
    let user = new User(this.request.body['user']);
    const result = yield user.save().catch((err) => false);
    if (result) {
      this.status = 201;
      this.redirect(`users/${user.id}`);
    } else {
      this.status = 422;
      yield this.render(`users/new`, { user: user });
    }
  }

  static *update() {
  }

  static *destroy() {
    const user = yield User.findById(this.params['id']);
    if (user) {
      this.status = 200;
      yield user.remove();
      this.redirect('users/index');
    } else {
      this.status = 404;
      this.body = { data: `user's id=${this.params['id']} not found` }
    }

  }

  static *new() {
    yield this.render('users/new');
  }

  static *edit() {
    yield this.render('users/edit');
  }
}

module.exports = Users;
module.exports.router = require('koa-router')();

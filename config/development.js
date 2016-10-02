'use strict';
require('config/base');

deps.app = deps.Koa();
deps.router = deps.Router();
deps.app
  .use(deps['BodyParser']())
  .use(deps['Logger']())
  .use(deps.router.routes())
  .use(deps.router.allowedMethods())
  .use(require('koa-hbs').middleware({
    viewPath: `${__project_dir}/views`,
    layoutsPath: `${__project_dir}/layouts`,
    defaultLayout: 'index',
    locals: {
      title: 'Koa WorkShop'
    }
  }));

process.env.NODE_ENV = process.env.NODE_ENV || 'development'
global.__project_dir = __dirname;
const app = require(`config/${process.env.NODE_ENV}`);
const AdminRoutes = require('routes/admin/routes');

_.forIn(AdminRoutes, (value, key) => {
  if (typeof(value) === 'function') {
    app
      .use(value.router.routes())
      .use(value.router.allowedMethods());
  }
});

const serve = require('koa-static');
app.use(serve(`${__project_dir}/public`));

module.exports = app;

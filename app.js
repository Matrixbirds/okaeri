process.env.NODE_ENV = process.env.NODE_ENV || 'development'
global.__project_dir = __dirname;
require('mongoose').Promise = global.Promise;
require(`config/${process.env.NODE_ENV}`);

const { app } = deps;

const AdminRoutes = require('routes/admin/routes');

_.forIn(AdminRoutes, (value, key) => {
  if (typeof(value) === 'function') {
    app.use(value.router.routes());
    app.use(value.router.allowedMethods());
  }
});

module.exports = app;

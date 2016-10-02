const ADMIN_CONTROLLERS_PATH = `${__project_dir}/controllers/admin`;
const path = require('path');
require('fs')
  .readdirSync(ADMIN_CONTROLLERS_PATH)
  .forEach((file) => {
    name = path.parse(file).name;
    exports[`${name}`] = require(`${ADMIN_CONTROLLERS_PATH}/${file}`);
  });
exports["articles"]
  .router
  .get('/articles', exports["articles"].index)
  .get('/articles/:id', exports["articles"].show)
  .get('/articles/new', exports["articles"].new)
  .post('/articles', exports["articles"].create)
  .put('/articles/:id', exports["articles"].update)
  .del('/articles/:id', exports["articles"].destroy);

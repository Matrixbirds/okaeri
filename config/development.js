'use strict';
require('config/base');

deps.App = deps.Koa();
deps['@router'] = deps.Router();
deps.App
  .use(deps['BodyParser']())
  .use(deps['Logger']())
  .use(deps['@router'].routes())
  .use(deps['@router'].allowedMethods());

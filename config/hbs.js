const options = {
  viewPath: `${__project_dir}/views`,
  layoutsPath: `${__project_dir}/layouts`,
  defaultLayout: 'index',
  partialsPath: [`${__project_dir}/views`],
  locals: {
    title: 'Koa WorkShop'
  }
};
module.exports = options;

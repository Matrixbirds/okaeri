module.exports = [
  {
    prefix: 'api',
    postfix: 'v1',
    pin: 'articles:api,routes:*',
    map: {
      index: {
        alias: '/api/articles/v1',
        GET: true,
        suffix: '/:page/:per'
      }
    }
  }
];

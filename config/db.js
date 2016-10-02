'use strict';
const Mongoose = require('mongoose');
Mongoose.Promise = global.Promise;
const URI = 'mongodb://localhost/okaeri-development';
const CONFIG = {
  server: {
    poolSize: 4
  }
};
const db = Mongoose.createConnection(URI, CONFIG);
db.on('error', function(err) {
 console.log(`error: connect ${URI} ${err}`);
});
db.once('open', function() {
 console.log(`connect ${URI} success!`);
});

module.exports = db;

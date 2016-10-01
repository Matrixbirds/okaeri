const Mongoose = require('mongoose');
//const schema = require('models/article/schema.json');
const ArticleSchema = Mongoose.Schema({title: String});
const Article = db.model('Article', ArticleSchema);
module.exports = db.model('Article');

const Mongoose = require('mongoose');
const ObjectId = Mongoose.Schema.ObjectId;
const ArticleSchema = Mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title required']
  },
  tags: {
    type: Array,
    required: [true, 'Tags required']
  },
  content: {
    type: String,
    required: [true, 'Content required']
  },
  author: {
    type: ObjectId,
    ref: 'UserSchema',
    required: [true, 'Author required']
  },
},
{
  timestamps: true
});
const Article = db.model('Article', ArticleSchema);
module.exports = db.model('Article');

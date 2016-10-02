const Mongoose = require('mongoose');
const ArticleSchema = Mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title required']
  },
  tags: {
    type: Array,
  //  required: [true, 'Tags required']
  },
  content: {
    type: String,
    required: [true, 'Content required']
  },
  authorId: {
    type: Number,
   // required: [true, 'AuthorId required']
  },
},
{
  timestamps: true
});
const Article = db.model('Article', ArticleSchema);
module.exports = db.model('Article');

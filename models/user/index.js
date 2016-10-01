const Mongoose = require('mongoose');
const schema = require('models/user/schema.json');
const UserSchema = Mongoose.Schema(schema);
const User = db.model('User', UserSchema);

module.exports = db.model('User');

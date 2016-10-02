const Mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UserSchema = Mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name required'],
    index: { unique: true }
  },
  encryptedPassword: {
    type: String,
    required: [true, 'password erorrs']
  },
},
{
  timestamps: true
});
const User = db.model('User', UserSchema);

UserSchema
  .virtual('password')
  .get(function() {
    return this._password;
  })
  .set(function(passwd) {
    this._password = passwd;
    let salt = bcrypt.genSaltSync(10);
    this.encryptedPassword = bcrypt.hashSync(passwd, salt);
  });
UserSchema
  .virtual('passwordConfirmation')
  .get(function() {
    return this._passwordConfirmation;
  })
  .set(function(passwd) {
    this._passwordConfirmation = passwd;
  });

UserSchema.methods.validPassword = function(password, fn) {
  bcrypt
    .compare(password, this.encryptedPassword)
    .then((isMatch) => fn(null, isMatch))
    .catch((err) => fn(err));
};

UserSchema.path('encryptedPassword').validate(function() {
  if(this._password || this._passwordConfirmation) {
    if (this._password !== this._passwordConfirmation) {
      this.invalidate('passwordConfirmation', 'must match confirmation');
    }
  }
}, null);

module.exports = db.model('User');

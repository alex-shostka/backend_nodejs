const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: {},
  username: {
    type: String
  },
  login: {},
  isDelete: {},
  roleId: {},
  lastCheickIn: {},
  passwordCount: {},
  oldPasswords: {},
  sessionKey: {},
  expiredTime: {},
  isLocked: {},
  password: {
    type: String
  }
});

module.exports = mongoose.model('users', userSchema);

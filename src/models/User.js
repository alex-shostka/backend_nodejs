const { Schema, model } = require('mongoose');

const User = new Schema({
  username: {
    type: String
  },
  password: {
    type: String
  },
  roles: {
    type: String,
    ref: 'Role'
  }
});

module.exports = model('User', User);

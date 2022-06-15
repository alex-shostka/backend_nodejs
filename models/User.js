const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: {},
    username: {
        type: String,
        required: true,
        unique: true
    },
    login: {},
    isDelite: {},
    roleId: {},
    lastCheickIn: {},
    passwordCount: {},
    oldPasswords: {},
    sessionKey: {},
    expiredTime: {},
    isLocked: {},
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('users', userSchema);
const { Schema, model } = require('mongoose');

const Role = new Schema({
    value: {
        type: String,
        /**
         * Если unique: true,
         * то я не могу создать больше двух пользовтелей
         * одной роли. Итого в БД один admin и один user
         * Как сделать только одного admin и много users
        */
        unique: true,
        default: 'USER'
    },
});

module.exports = model('Role', Role);

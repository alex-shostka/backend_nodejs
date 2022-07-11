const express = require('express');
const router = express.Router();
const controller = require('../controllers/auth');
const { check } = require('express-validator');

router.post('/login', controller.login);
router.post('/register', [
    check('username', "Имя не может быть пустым").notEmpty(),
    check('passwords', "Пароль не может быть пустым").notEmpty(),
    check('passwords', "Не меньше 4 символов").isLength({ min: 4 })
], controller.register);

module.exports = router;

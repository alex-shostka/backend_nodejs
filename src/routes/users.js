const express = require('express');
const router = express.Router();
const controller = require('../controllers/users');
const isAuth = require('../middleware/isAuth');

router
    .route('/')
    .get(isAuth, controller.getUsers)

router
    .route('/:id')
    .get(isAuth, controller.getUser)

module.exports = router;
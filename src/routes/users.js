const express = require('express');
const router = express.Router();
const controller = require('../controllers/users');
const isAuth = require('../middleware/isAuth');
const isRole = require('../middleware/isRole')

router.get('/', [isAuth, isRole(["admin"])], controller.getUsers);
router.get('/:id', [isAuth, isRole(["admin"])], controller.getUser);

module.exports = router;

const express = require('express');
const router = express.Router();
const controller = require('../controllers/zones.js');
const isAuth = require('../middleware/isAuth');

router
  .route('/')
  .get(isAuth, controller.getZones)
  .post(isAuth, controller.addZone);

router
  .route('/:id')
  .get(isAuth, controller.getOneZone)
  .put(isAuth, controller.updateZone)
  .delete(isAuth, controller.deleteZone);

module.exports = router;

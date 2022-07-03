const express = require("express");
const router = express.Router();
const controller = require("../controllers/zones.js");
const isAuth = require("../middleware/isAuth");

router.get("/", isAuth, controller.getZones);
router.get("/:id", isAuth, controller.getZoneById);
router.post("/", isAuth, controller.addZone);
router.put("/:id", isAuth, controller.updateZone);
router.delete("/:id", isAuth, controller.deleteZone);

module.exports = router;

const express = require("express");
const router = express.Router();
const controller = require("../controllers/zones.js");

router.get("/", controller.getZones);
router.get("/:id", controller.getZoneById);
router.post("/", controller.addZone);
router.put("/:id", controller.updateZone);
router.delete("/:id", controller.deleteZone);

module.exports = router;

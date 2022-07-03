const express = require("express");
const router = express.Router();
const controller = require("../controllers/users");
const isAuth = require("../middleware/isAuth");

router.get("/", isAuth, controller.getUsers);
router.get("/:id", isAuth, controller.getUser);

module.exports = router;

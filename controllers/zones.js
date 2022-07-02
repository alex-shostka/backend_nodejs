const Zone = require("../models/Zones.js");

module.exports.getZones = async (req, res) => {
  try {
    const zones = await Zone.find({});
    res.status(200).json(zones);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports.addZone = async (req, res) => {
  const zone = new Zone({
    zoneId: req.body.zoneId,
    name: req.body.name,
    zoneType: req.body.zoneType,
    z: req.body.z,
    leftUpX: req.body.leftUpX,
    leftUpY: req.body.leftUpY,
    rightUpY: req.body.rightUpY,
    rightUpX: req.body.rightUpX,
    leftDownY: req.body.leftDownY,
    leftDownX: req.body.leftDownX,
    centerX: req.body.centerX,
    centerY: req.body.centerY,
    isDelete: req.body.isDelete,
  });

  try {
    await zone.save();

    res.status(201).json({
      message: "Зона успешно создана",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports.updateZone = async (req, res) => {};

module.exports.deleteZone = async (req, res) => {};

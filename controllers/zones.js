const Zone = require("../models/Zones.js");

module.exports.getZones = async (req, res) => {
  try {
    const zones = await Zone.find({});
    res.status(200).json(zones);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Oшибка сервера" });
  }
};

module.exports.getOneZone = async (req, res) => {
  try {
    const zone = await Zone.findById(req.params.id);
    res.status(200).json(zone);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Oшибка сервера" });
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

  /**
   * Проверить, существует ли такая зона в базе
   * есть - вернуть сообщение "Зона уже существует"
   * нету - записать в базу
   */

  try {
    await zone.save();

    res.status(201).json({
      message: "Зона успешно создана",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Oшибка сервера" });
  }
};

module.exports.updateZone = async (req, res) => {
  /**
   * Переработать логику обнавления зоны
   * */
  const updated = {
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
  };

  if (req.zoneId) {
    (updated.zoneId = req.body.zoneId),
      (updated.name = req.body.name),
      (updated.zoneType = req.body.zoneType),
      (updated.z = req.body.z),
      (updated.leftUpX = req.body.leftUpX),
      (updated.leftUpY = req.body.leftUpY),
      (updated.rightUpY = req.body.rightUpY),
      (updated.rightUpX = req.body.rightUpX),
      (updated.leftDownY = req.body.leftDownY),
      (updated.leftDownX = req.body.leftDownX),
      (updated.centerX = req.body.centerX),
      (updated.centerY = req.body.centerY),
      (updated.isDelete = req.body.isDelete);
  }

  try {
    await Zone.findOneAndUpdate(
      { _id: req.params.id },
      { $set: updated },
      { new: true }
    );
    res.status(200).json({ message: "Зона успешно обновлена" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Oшибка сервера" });
  }
};

module.exports.deleteZone = async (req, res) => {
  const zoneId = req.params.id;

  try {
    await Zone.findByIdAndRemove(zoneId);
    res.status(200).json({ message: "Зона удалена" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Oшибка сервера" });
  }
};

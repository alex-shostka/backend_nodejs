const Zone = require('../models/Zone');
const errorHandler = require('../utils/errorHandler');

module.exports.getAll = async function (req, res) {
    try {
        const zones = await Zone.find();
        res.status(200).json(zones);
    } catch (error) {
        errorHandler(error);
    }
}

module.exports.getById = async function (req, res) {
    try {
        const zone = await Zone.findById(req.params.id);
        res.status(200).json(zone);
    } catch (error) {
        errorHandler(error);
    }
}

module.exports.remove = async function (req, res) {
    try {
        await Zone.remove({ _id: req.params.id });
        res.status(200).json({
            message: 'Зона удалена'
        });
    } catch (error) {
        errorHandler(error);
    }
}

module.exports.create = async function (req, res) {
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
        isDelete: req.body.isDelete
    });

    try {
        await zone.save();
        res.status(201).json(zone);
    } catch (error) {
        errorHandler(error);
    }
}

module.exports.update = async function (req, res) {
    console.log('req.zoneId', req);
    
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
        isDelete: req.body.isDelete
    };
    
    if (req.zoneId) {
        updated.zoneId = req.body.zoneId,
        updated.name = req.body.name,
        updated.zoneType = req.body.zoneType,
        updated.z = req.body.z,
        updated.leftUpX = req.body.leftUpX,
        updated.leftUpY = req.body.leftUpY,
        updated.rightUpY = req.body.rightUpY,
        updated.rightUpX = req.body.rightUpX,
        updated.leftDownY = req.body.leftDownY,
        updated.leftDownX = req.body.leftDownX,
        updated.centerX = req.body.centerX,
        updated.centerY = req.body.centerY,
        updated.isDelete = req.body.isDelete
    }
    try {
        const zone = await Zone.findOneAndUpdate(
            { _id: req.params.id },
            { $set: updated },
            { new: true }
        )
        res.status(200).json(zone);
    } catch (error) {
        errorHandler(error);
    }
}

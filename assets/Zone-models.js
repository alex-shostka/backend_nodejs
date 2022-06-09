const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const zoneSchema = new Schema({
    zoneId: {
        type: Number,
    },
    name: {
        type: String,
    },
    zoneType: {
        type: Number,
    },
    z: { // Этаж !!!!!
        type: Number,
    },
    leftUpX: {
        type: Number,
    },
    leftUpY: {
        type: Number,
    },
    rightUpY: {
        type: Number,
    },
    rightUpX: {
        type: Number,
    },
    leftDownY: {
        type: Number,
    },
    leftDownX: {
        type: Number,
    },
    centerX: {
        type: Number,
    },
    centerY: {
        type: Number,
    },
    isDelete: {
        type: Boolean,
    }
})

module.exports = mongoose.model('zones', zoneSchema);
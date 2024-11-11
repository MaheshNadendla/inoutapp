const mongoose = require("mongoose");

const boysModel = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    roll: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    intime: {
        type: Date,
        required: true
    },
    outtime: {
        type: Date,
        default: Date.now
    }
});


const totalboys = mongoose.model("totalboys",boysModel);
module.exports = totalboys;



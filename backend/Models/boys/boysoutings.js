const mongoose = require("mongoose");

const boyshomeModel = mongoose.Schema({
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
        default: Date.now
    },
    outtime: {
        type: Date,
        default: Date.now
    }
});


const boysoutings = mongoose.model("boysoutings",boyshomeModel);
module.exports = boysoutings;



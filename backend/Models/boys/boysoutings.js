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
    place: {
        type: String,
        required: true
    },
    outdate: {
        type: String,
        required: true
    },
    outtime: {
        type: String,
        required: true
    },
    indate: {
        type: String,
        required: true
    },
    intime: {
        type: String,
        required: true
    }
});


const boysoutings = mongoose.model("boysoutings",boyshomeModel);
module.exports = boysoutings;



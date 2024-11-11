const mongoose = require("mongoose");

const boysincolModel = mongoose.Schema({
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


const boysin = mongoose.model("boysincolleges",boysincolModel);
module.exports = boysin;

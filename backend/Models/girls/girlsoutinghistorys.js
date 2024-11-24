
const mongoose = require("mongoose");

const girlsoutingHistoryModel = mongoose.Schema({
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

const girlsoutinghistorys = mongoose.model("girlsoutinghistorys",girlsoutingHistoryModel);
module.exports = girlsoutinghistorys;




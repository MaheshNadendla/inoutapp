const mongoose = require("mongoose");

const boysModel = mongoose.Schema({
    name:    
    {
        type : String,
        required : true
    },
    roll:    
    {
        type : String,
        required : true
    },

})

const totalboys = mongoose.model("totalboys",boysModel);
module.exports = totalboys;



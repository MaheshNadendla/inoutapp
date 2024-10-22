const totalboys = require("../../Models/boys/totalboys.js");


const create = async (req,res)=>{

    try{

    const {name,roll} = req.body;

    const exists = await totalboys.findOne({roll});
    if(exists)
    {
       return res.status(409).json({msg : "user already exists", status : false});
    }

    const newUser = new totalboys({name,roll});
    newUser.save();

    res.status(201).json({msg : "UserCreated Sucess", status : true});


    }
    catch(err){

        res.status(500).json({msg : "Internal Server error", status : false});


    }


};

module.exports = {create};
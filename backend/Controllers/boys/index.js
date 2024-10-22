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

const finduser = async (req,res)=>{

    try{

    const roll = req.params.id;

    console.log(roll); 

    const exists = await totalboys.findOne({roll : roll});
    if(exists)
    {
       return res.status(200).json({msg : "user is found", status : true ,user : exists});
    }

    res.status(404).json({msg : "User not Found", status : false});


    }
    catch(err){

        res.status(500).json({msg : "Internal Server error", status : false});


    }


};

module.exports = {create,finduser};
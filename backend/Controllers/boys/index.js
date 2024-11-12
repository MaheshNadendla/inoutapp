const totalboys = require("../../Models/boys/totalboys.js");


const create = async (req,res)=>{

    try{

    const {name,roll,intime,outtime,phone} = req.body;

    const exists = await totalboys.findOne({roll});
    if(exists)
    {
       return res.status(409).json({msg : "user already exists", status : false});
    }

    const newUser = new totalboys({name,roll,intime,outtime,phone});
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

const updateUser = async (req,res)=>{

    try{

    const roll = req.params.id;

    console.log(roll); 

    const exists = await totalboys.findOne({roll : roll});
    
    if(exists)
    {
        const newUser = await totalboys.updateOne({ roll: roll }, { $set: req.body });
        console.log(newUser);
       return res.status(200).json({msg : "user is found", status : true ,user : newUser});
    }

    res.status(404).json({msg : "User not Found", status : false});


    }
    catch(err){

        res.status(500).json({msg : "Internal Server error", status : false});


    }


};

const del = async (req,res)=>{

    try{

    const roll = req.params.id;
    const x = await totalboys.findOneAndDelete({roll : roll});

    if(!x)
        return res.status(404).json({fuck: "user not found"});

    return res.status(200).json(x,{user : "data is this "},{msg : "del sucess"});
    }
    catch(err){

       return res.status(404).json({fuck: "error"});
    }
};


const getAll = async (req,res)=>{

    try{

    const roll = req.params.id;

    console.log(roll); 

    const users = await totalboys.find();
    if(users)
    {
       return res.status(200).json(users);
    }

    res.status(404).json({msg : "Empty Found", status : false});


    }
    catch(err){

        res.status(500).json({msg : "Internal Server error", status : false});


    }


};


// llasfkfmmkmfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff

const boyshomes = require("../../Models/boys/boyshomes.js");

const boysin = require("../../Models/boys/boysincolleges.js");


const TotalBoysInHome = async (req,res)=>{

    try{

    const roll = req.params.id;

    console.log(roll); 

    const users = await boyshomes.find();
    if(users)
    {
       return res.status(200).json(users);
    }

    res.status(404).json({msg : "Empty Found", status : false});


    }
    catch(err){

        res.status(500).json({msg : "Internal Server error", status : false});


    }


};


const findingABoyInHome = async (req,res)=>{

    try{

    const roll = req.params.id;

    console.log(roll); 

    const exists = await boyshomes.findOne({roll : roll});
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



const findInTotalBoysAndFindInCollegeBoysAndSendBoysHome = async (req, res) => {
    try {
        const roll = req.params.id;
        console.log(roll);

        const intotal = await totalboys.findOne({ roll: roll });
        if (!intotal) {
            return res.status(404).json({ msg: "User not found in totalboys", status: false });
        }

        const incollege = await boysin.findOne({ roll: roll });
        if (!incollege) {
            return res.status(404).json({ msg: "User not found in collegeboys", status: false });
        }
        const x = await boysin.findOne({ roll: roll });
       
        if (!x) {
            return res.status(404).json({ msg: "User not found to delete in collegeboys" });
        }
        else{
        // Use spread operator to create new object without _id field
        await boysin.findOneAndDelete({ roll: roll });
        const { _id, ...userData } = x.toObject();
        const newoe = new boyshomes(userData);
        await newoe.save();
        
        }

        return res.status(201).json({ msg: "User created successfully in boyshomes", status: true });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: "Internal server error", status: false });
    }
};

module.exports = {create,finduser,updateUser,del,getAll,findInTotalBoysAndFindInCollegeBoysAndSendBoysHome,TotalBoysInHome,findingABoyInHome};
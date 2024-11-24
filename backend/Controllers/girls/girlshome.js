
const totalgirls = require("../../Models/girls/totalgirls.js");

const girlshomes = require("../../Models/girls/girlshomes.js");

const girlsin = require("../../Models/girls/girlsincolleges.js");

const girlsoutings = require("../../Models/girls/girlsoutings.js");

const girlshomehistorys = require("../../Models/girls/girlshomehistorys.js");


const getAllGirlsFromHome = async (req,res)=>{

    try{

    const roll = req.params.id;

    console.log(roll); 

    const users = await totalgirls.find();
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


const TotalGirlsInHome = async (req,res)=>{

    try{

    const roll = req.params.id;

    console.log(roll); 

    const users = await girlshomes.find();
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



const findInTotalGirlsAndFindInCollegeGirlsAndSendGirlsHome = async (req, res) => {
    try {

        const roll = req.params.id;
        const { place } = req.body;  
        console.log(`Place: ${place}`);

        if(!place)
        {
            return res.status(200).json({ msg: "Place Required", status: 'war' });  //422
        }

        const intotal = await totalgirls.findOne({ roll: roll });
        if (!intotal) {
            return res.status(200).json({ msg: "Student Id Not Found", status: false });  //404
        }

        const inhome = await girlshomes.findOne({ roll: roll });
        if (inhome) {
            return res.status(200).json({ msg: "Girl Allready In Home", status: 'war' });  //302
        }

        const inouting = await girlsoutings.findOne({ roll: roll });
        if (inouting) {
            return res.status(200).json({ msg: "Girl Gone For Outing : Cant send Home", status: 'war' });  //302
        }

        const incollege = await girlsin.findOne({ roll: roll });
        if (!incollege) {
            return res.status(200).json({ msg: "Student Id Not Found", status: false });  //404
        }
        const x = await girlsin.findOne({ roll: roll });
       
        if (!x) {
            return res.status(200).json({ msg: "Student Id Not Found",status: false });  //404
        }
        else{
        
        await girlsin.findOneAndDelete({ roll: roll });
        const { _id, ...userData } = x.toObject();
        userData.place = place;

        const localeDate = new Date(Date.now()).toLocaleString();
        const [date, time] = localeDate.split(', '); // Splitting the date and time
        console.log("Date:", date); // Example: 11/16/2024
        console.log("Time:", time); 
        
        userData.indate= '-';
        userData.intime = '-';
        userData.outdate= date;
        userData.outtime = time;

        const newoe = new girlshomes(userData);
        await newoe.save();
        
        const newoe2 = new girlshomehistorys(userData);
        await newoe2.save();
        
        }

        return res.status(200).json({ msg: "Sent Girl Home Successfully", status: true }); //201

    } catch (err) {
        console.error(err);
        return res.status(200).json({ msg: "Internal Server Error", status: false });  //500
    }
};


const findInTotalGirlsAndFindInGirlsHomeAndSendToCollege = async (req, res) => {
    try {

        const roll = req.params.id;
        console.log(roll);

        const a1 = await totalgirls.findOne({ roll: roll });
        if (!a1) {
            return res.status(200).json({ msg: "Student Id Not Found", status: false }); //404
        }

        const a2 = await girlsin.findOne({ roll: roll });
        if (a2) {
            return res.status(200).json({ msg: "Girl Allready In College", status: 'war' });  //303
        }

        const a3 = await girlsoutings.findOne({ roll: roll });
        if (a3) {
            return res.status(200).json({ msg: "Girl Gone For Outing : Come In Outing Section : In", status: 'war' });  //302
        }

        const a4 = await girlshomes.findOne({ roll: roll });
        if (!a4) {
            return res.status(200).json({ msg: "Student Id Not Found", status: false });  //404
        }
        const a5 = await girlshomes.findOne({ roll: roll });
       
        if (!a5) {
            return res.status(200).json({ msg: "Student Id Not Found",status: false }); //404
        }
        else{


            const localeDate = new Date(Date.now()).toLocaleString();
            const [date, time] = localeDate.split(', '); // Splitting the date and time
            console.log("Date:", date); // Example: 11/16/2024
            console.log("Time:", time);

            await girlshomehistorys.findOneAndUpdate(
                { roll: roll, indate: '-', intime: '-' }, // Filter
                { $set: { indate: date , intime: time } }, // Update
                { new: true, runValidators: true } // Options
            );

        await girlshomes.findOneAndDelete({ roll: roll });
        const { _id, ...userData } = a5.toObject();
        userData.place='college';
        const newoe = new girlsin(userData);
        await newoe.save();
        
        }

        return res.status(200).json({ msg: "Sent Girl In College Successfully", status: true });  //201

    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: "Internal Server Error", status: false }); //500
    }
};




const girlsHomeHistory =  async(req,res)=>{

    try {

        const allGirlsGoneHome = await girlshomehistorys.find();
        return res.status(200).json(allGirlsGoneHome);  
        
        
    } catch (error) {
        return res.status(500).json({ msg: "Internal Server Error", status: false }); //500
    }

}

module.exports = {getAllGirlsFromHome,findInTotalGirlsAndFindInCollegeGirlsAndSendGirlsHome,findInTotalGirlsAndFindInGirlsHomeAndSendToCollege,TotalGirlsInHome,girlsHomeHistory};
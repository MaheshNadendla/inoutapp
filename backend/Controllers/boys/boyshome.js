
const totalboys = require("../../Models/boys/totalboys.js");

const boyshomes = require("../../Models/boys/boyshomes.js");

const boysin = require("../../Models/boys/boysincolleges.js");

const boysoutings = require("../../Models/boys/boysoutings.js");

const boyshomehistorys = require("../../Models/boys/boyshomehistorys.js");


const getAllFromHome = async (req,res)=>{

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



const findInTotalBoysAndFindInCollegeBoysAndSendBoysHome = async (req, res) => {
    try {

        const roll = req.params.id;
        const { place } = req.body;  
        console.log(`Place: ${place}`);

        if(!place)
        {
            return res.status(200).json({ msg: "Place Required", status: 'war' });  //422
        }

        const intotal = await totalboys.findOne({ roll: roll });
        if (!intotal) {
            return res.status(200).json({ msg: "Student Id Not Found", status: false });  //404
        }

        const inhome = await boyshomes.findOne({ roll: roll });
        if (inhome) {
            return res.status(200).json({ msg: "Boy Allready In Home", status: 'war' });  //302
        }

        const inouting = await boysoutings.findOne({ roll: roll });
        if (inouting) {
            return res.status(200).json({ msg: "Boy Gone For Outing : Cant send Home", status: 'war' });  //302
        }

        const incollege = await boysin.findOne({ roll: roll });
        if (!incollege) {
            return res.status(200).json({ msg: "Student Id Not Found", status: false });  //404
        }
        const x = await boysin.findOne({ roll: roll });
       
        if (!x) {
            return res.status(200).json({ msg: "Student Id Not Found",status: false });  //404
        }
        else{
        
        await boysin.findOneAndDelete({ roll: roll });
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

        const newoe = new boyshomes(userData);
        await newoe.save();
        
        const newoe2 = new boyshomehistorys(userData);
        await newoe2.save();
        
        }

        return res.status(200).json({ msg: "Sent Boy Home Successfully", status: true }); //201

    } catch (err) {
        console.error(err);
        return res.status(200).json({ msg: "Internal Server Error", status: false });  //500
    }
};


const findInTotalBoysAndFindInBoysHomeAndSendToCollege = async (req, res) => {
    try {

        const roll = req.params.id;
        console.log(roll);

        const a1 = await totalboys.findOne({ roll: roll });
        if (!a1) {
            return res.status(200).json({ msg: "Student Id Not Found", status: false }); //404
        }

        const a2 = await boysin.findOne({ roll: roll });
        if (a2) {
            return res.status(200).json({ msg: "Boy Allready In College", status: 'war' });  //303
        }

        const a3 = await boysoutings.findOne({ roll: roll });
        if (a3) {
            return res.status(200).json({ msg: "Boy Gone For Outing : Come In Outing Section : In", status: 'war' });  //302
        }

        const a4 = await boyshomes.findOne({ roll: roll });
        if (!a4) {
            return res.status(200).json({ msg: "Student Id Not Found", status: false });  //404
        }
        const a5 = await boyshomes.findOne({ roll: roll });
       
        if (!a5) {
            return res.status(200).json({ msg: "Student Id Not Found",status: false }); //404
        }
        else{


            const localeDate = new Date(Date.now()).toLocaleString();
            const [date, time] = localeDate.split(', '); // Splitting the date and time
            console.log("Date:", date); // Example: 11/16/2024
            console.log("Time:", time);

            await boyshomehistorys.findOneAndUpdate(
                { roll: roll, indate: '-', intime: '-' }, // Filter
                { $set: { indate: date , intime: time } }, // Update
                { new: true, runValidators: true } // Options
            );

        await boyshomes.findOneAndDelete({ roll: roll });
        const { _id, ...userData } = a5.toObject();
        userData.place='college';
        const newoe = new boysin(userData);
        await newoe.save();
        
        }

        return res.status(200).json({ msg: "Sent Boy In College Successfully", status: true });  //201

    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: "Internal Server Error", status: false }); //500
    }
};




const boysHomeHistory =  async(req,res)=>{

    try {

        const allBoysGoneHome = await boyshomehistorys.find();
        return res.status(200).json(allBoysGoneHome);  
        
        
    } catch (error) {
        return res.status(500).json({ msg: "Internal Server Error", status: false }); //500
    }

}

module.exports = {getAllFromHome,findInTotalBoysAndFindInCollegeBoysAndSendBoysHome,findInTotalBoysAndFindInBoysHomeAndSendToCollege,TotalBoysInHome,boysHomeHistory};
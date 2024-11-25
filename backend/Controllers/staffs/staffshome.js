
const totalstaffs = require("../../Models/staffs/totalstaffs.js");

const staffshomes = require("../../Models/staffs/staffshomes.js");

const staffsin = require("../../Models/staffs/staffsincolleges.js");


const staffshomehistorys = require("../../Models/staffs/staffshomehistorys.js");


const getAllStaffsFromHome = async (req,res)=>{
 
    try{

    const roll = req.params.id;

    console.log(roll); 

    const users = await totalstaffs.find();
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


const TotalStaffsInHome = async (req,res)=>{

    try{

    const roll = req.params.id;

    console.log(roll); 

    const users = await staffshomes.find();
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



const findInTotalStaffsAndFindInCollegeStaffsAndSendStaffsHome = async (req, res) => {
    try {

        const roll = req.params.id;
        const { place } = req.body;  
        console.log(`Place: ${place}`);

        if(!place)
        {
            return res.status(200).json({ msg: "Place Required", status: 'war' });  //422
        }

        const intotal = await totalstaffs.findOne({ roll: roll });
        if (!intotal) {
            return res.status(200).json({ msg: "Student Id Not Found", status: false });  //404
        }

        const inhome = await staffshomes.findOne({ roll: roll });
        if (inhome) {
            return res.status(200).json({ msg: "Staff Allready In Home", status: 'war' });  //302
        }


        const incollege = await staffsin.findOne({ roll: roll });
        if (!incollege) {
            return res.status(200).json({ msg: "Student Id Not Found", status: false });  //404
        }
        const x = await staffsin.findOne({ roll: roll });
       
        if (!x) {
            return res.status(200).json({ msg: "Student Id Not Found",status: false });  //404
        }
        else{
        
        await staffsin.findOneAndDelete({ roll: roll });
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

        const newoe = new staffshomes(userData);
        await newoe.save();
        
        const newoe2 = new staffshomehistorys(userData);
        await newoe2.save();
        
        }

        return res.status(200).json({ msg: "Sent Staff Home Successfully", status: true }); //201

    } catch (err) {
        console.error(err);
        return res.status(200).json({ msg: "Internal Server Error", status: false });  //500
    }
};


const findInTotalStaffsAndFindInStaffsHomeAndSendToCollege = async (req, res) => {

    try {

        const roll = req.params.id;
        console.log(roll);

        const a1 = await totalstaffs.findOne({ roll: roll });
        if (!a1) {
            return res.status(200).json({ msg: "Student Id Not Found", status: false }); //404
        }

        const a2 = await staffsin.findOne({ roll: roll });
        if (a2) {
            return res.status(200).json({ msg: "Staff Allready In College", status: 'war' });  //303
        }


        const a4 = await staffshomes.findOne({ roll: roll });
        if (!a4) {
            return res.status(200).json({ msg: "Student Id Not Found", status: false });  //404
        }
        const a5 = await staffshomes.findOne({ roll: roll });
       
        if (!a5) {
            return res.status(200).json({ msg: "Student Id Not Found",status: false }); //404
        }
        else{


            const localeDate = new Date(Date.now()).toLocaleString();
            const [date, time] = localeDate.split(', '); // Splitting the date and time
            console.log("Date:", date); // Example: 11/16/2024
            console.log("Time:", time);

            await staffshomehistorys.findOneAndUpdate(
                { roll: roll, indate: '-', intime: '-' }, // Filter
                { $set: { indate: date , intime: time } }, // Update
                { new: true, runValidators: true } // Options
            );

        await staffshomes.findOneAndDelete({ roll: roll });
        const { _id, ...userData } = a5.toObject();
        userData.place='college';
        const newoe = new staffsin(userData);
        await newoe.save();
        
        }

        return res.status(200).json({ msg: "Sent Staff In College Successfully", status: true });  //201

    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: "Internal Server Error", status: false }); //500
    }
};




const staffsHomeHistory =  async(req,res)=>{

    try {

        const allStaffsGoneHome = await staffshomehistorys.find();
        return res.status(200).json(allStaffsGoneHome);  
        
        
    } catch (error) {
        return res.status(500).json({ msg: "Internal Server Error", status: false }); //500
    }

}

module.exports = {getAllStaffsFromHome,findInTotalStaffsAndFindInCollegeStaffsAndSendStaffsHome,findInTotalStaffsAndFindInStaffsHomeAndSendToCollege,TotalStaffsInHome,staffsHomeHistory};
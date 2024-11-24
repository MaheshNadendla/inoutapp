
const totalgirls = require("../../Models/girls/totalgirls.js");

const girlsoutings = require("../../Models/girls/girlsoutings.js");

const girlsin = require("../../Models/girls/girlsincolleges.js");

const girlshomes = require("../../Models/girls/girlshomes.js");

const girlsoutinghistorys = require("../../Models/girls/girlsoutinghistorys.js");


const getAllGirlsFromOuting = async (req,res)=>{

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




const findInTotalGirlsAndFindInCollegeGirlsAndSendGirlsOuting = async (req, res) => {
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

        const atout = await girlsoutings.findOne({ roll: roll });
        if (atout) {
            return res.status(200).json({ msg: "Girl Allready At Outing", status: 'war' });  //302
        }

        const athome = await girlshomes.findOne({ roll: roll });
        if (athome) {
            return res.status(200).json({ msg: "Girl Gone Home : Cant send Outing", status: 'war' });  //302
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

        const newoe = new girlsoutings(userData);
        await newoe.save();
        
        const newoe2 = new girlsoutinghistorys(userData);
        await newoe2.save();
        
        }

        return res.status(200).json({ msg: "Sent Girl Outing Successfully", status: true }); //201

    } catch (err) {
        console.error(err);
        return res.status(200).json({ msg: "Internal Server Error", status: false });  //500
    }
};



const findInTotalGirlsAndFindInGirlsOutingAndSendToCollege = async (req, res) => {
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

        const a3 = await girlshomes.findOne({ roll: roll });
        if (a3) {
            return res.status(200).json({ msg: "Girl Gone Home : Come In Home Section : In", status: 'war' });  //302
        }

        const a4 = await girlsoutings.findOne({ roll: roll });
        if (!a4) {
            return res.status(200).json({ msg: "Student Id Not Found", status: false });  //404
        }
        const a5 = await girlsoutings.findOne({ roll: roll });
       
        if (!a5) {
            return res.status(200).json({ msg: "Student Id Not Found",status: false }); //404
        }
        else{


            const localeDate = new Date(Date.now()).toLocaleString();
            const [date, time] = localeDate.split(', '); // Splitting the date and time
            console.log("Date:", date); // Example: 11/16/2024
            console.log("Time:", time);

            await girlsoutinghistorys.findOneAndUpdate(
                { roll: roll, indate: '-', intime: '-' }, // Filter
                { $set: { indate: date , intime: time } }, // Update
                { new: true, runValidators: true } // Options
            );

        await girlsoutings.findOneAndDelete({ roll: roll });
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

const TotalGirlsInOuting = async (req,res)=>{

    try{

    const roll = req.params.id;

    console.log(roll); 

    const users = await girlsoutings.find();
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


const girlsOutingHistory =  async(req,res)=>{

    try {

        const historygirlsouting = await girlsoutinghistorys.find();
        return res.status(200).json(historygirlsouting);  

    } catch (error) {
        return res.status(500).json({ msg: "Internal Server Error", status: false }); //500
    }

}

module.exports = {getAllGirlsFromOuting,findInTotalGirlsAndFindInCollegeGirlsAndSendGirlsOuting,findInTotalGirlsAndFindInGirlsOutingAndSendToCollege,TotalGirlsInOuting,girlsOutingHistory}

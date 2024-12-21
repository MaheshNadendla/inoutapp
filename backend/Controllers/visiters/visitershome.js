const totalboys = require("../../Models/boys/totalboys.js");

const totalgirls = require("../../Models/girls/totalgirls.js");

const totalvisiters = require("../../Models/visiters/totalvisiters.js");

const visitershomes = require("../../Models/visiters/visitershomes.js");

const visitersin = require("../../Models/visiters/visitersincolleges.js");

const visitershomehistorys = require("../../Models/visiters/visitershomehistorys.js");


const getAllVisitersFromHome = async (req,res)=>{
 
    try{

    const roll = req.params.id;

    console.log(roll); 

    const users = await totalvisiters.find();
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


// const TotalVisitersInHome = async (req,res)=>{

//     try{

//     const roll = req.params.id;

//     console.log(roll); 

//     const users = await visitershomes.find();
//     if(users)
//     {
//        return res.status(200).json(users);
//     }

//     res.status(404).json({msg : "Empty Found", status : false});


//     }
//     catch(err){

//         res.status(500).json({msg : "Internal Server error", status : false});


//     }


// };


const getAllVisitersinCollege = async (req,res)=>{
 
    try{

    const roll = req.params.id;

    console.log(roll); 

    const users = await totalvisiters.find();
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





const findInTotalVisitersAndFindInCollegeVisitersAndSendVisitersHome = async (req, res) => {
    try {

        const roll = req.params.id;
        const { place } = req.body;  
        console.log(`Place: ${place}`);

        if(!place)
        {
            return res.status(200).json({ msg: "Place Required", status: 'war' });  //422
        }

        const intotals = await totalboys.findOne({ roll: roll });

        // if(!intotal)
        // {
        //     intotal = await totalgirls.findOne({ roll: roll });
        // }

        if (!intotals) {

            // console.log(intotals);
            return res.status(200).json({ msg: "Student Id Not Found", status: false });  //404
        }

        // const inhome = await visitershomes.findOne({ roll: roll });
        // if (inhome) {
        //     return res.status(200).json({ msg: "Staff Allready In Home", status: 'war' });  //302
        // }


        // const incollege = await visitersin.findOne({ roll: roll });
        // if (!incollege) {
        //     return res.status(200).json({ msg: "Student Id Not Found", status: false });  //404
        // }
        // const x = await visitersin.findOne({ roll: roll });
       
        // if (!x) {
        //     return res.status(200).json({ msg: "Student Id Not Found",status: false });  //404
        // }
        else{
        
        // await visitersin.findOneAndDelete({ roll: roll });

        const { _id, ...userData } = intotals.toObject();
        userData.name = place;

        const localeDate = new Date(Date.now()).toLocaleString();
        const [date, time] = localeDate.split(', '); // Splitting the date and time
        console.log("Date:", date); // Example: 11/16/2024
        console.log("Time:", time); 
        
        userData.indate= date;
        userData.intime = time;
        userData.outdate= '-';
        userData.outtime = '-';

        const newoe = new visitershomes(userData);
        await newoe.save();
        
        const newoe2 = new visitershomehistorys(userData);
        await newoe2.save();
        
        }

        return res.status(200).json({ msg: "Sent Staff Home Successfully", status: true }); //201

    } catch (err) {
        console.error(err);
        return res.status(200).json({ msg: "Internal Server Error", status: false });  //500
    }
};


const findInTotalVisitersAndFindInVisitersHomeAndSendToCollege = async (req, res) => {

    try {

        const roll = req.params.id;
        console.log(roll);

        const a1 = await totalvisiters.findOne({ roll: roll });
        if (!a1) {
            return res.status(200).json({ msg: "Student Id Not Found", status: false }); //404
        }

        const a2 = await visitersin.findOne({ roll: roll });
        if (a2) {
            return res.status(200).json({ msg: "Staff Allready In College", status: 'war' });  //303
        }


        // const a4 = await visitershomes.findOne({ roll: roll });
        if (!a4) {
            return res.status(200).json({ msg: "Student Id Not Found", status: false });  //404
        }
        // const a5 = await visitershomes.findOne({ roll: roll });
       
        if (!a5) {
            return res.status(200).json({ msg: "Student Id Not Found",status: false }); //404
        }
        else{


            const localeDate = new Date(Date.now()).toLocaleString();
            const [date, time] = localeDate.split(', '); // Splitting the date and time
            console.log("Date:", date); // Example: 11/16/2024
            console.log("Time:", time);

            await visitershomehistorys.findOneAndUpdate(
                { roll: roll, indate: '-', intime: '-' }, // Filter
                { $set: { indate: date , intime: time } }, // Update
                { new: true, runValidators: true } // Options
            );

        // await visitershomes.findOneAndDelete({ roll: roll });
        const { _id, ...userData } = a5.toObject();
        userData.place='college';
        const newoe = new visitersin(userData);
        await newoe.save();
        
        }

        return res.status(200).json({ msg: "Sent Staff In College Successfully", status: true });  //201

    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: "Internal Server Error", status: false }); //500
    }
};




const visitersHomeHistory =  async(req,res)=>{

    try {

        const allVisitersGoneHome = await visitershomehistorys.find();
        return res.status(200).json(allVisitersGoneHome);  
        
        
    } catch (error) {
        return res.status(500).json({ msg: "Internal Server Error", status: false }); //500
    }

}

module.exports = {getAllVisitersFromHome,findInTotalVisitersAndFindInCollegeVisitersAndSendVisitersHome,findInTotalVisitersAndFindInVisitersHomeAndSendToCollege,getAllVisitersinCollege,visitersHomeHistory};
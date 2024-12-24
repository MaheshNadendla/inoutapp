const totalboys = require("../../Models/boys/totalboys.js");

const totalgirls = require("../../Models/girls/totalgirls.js");

const totalvisiters = require("../../Models/visiters/totalvisiters.js");

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

        else{

            const inhomethere = await totalvisiters.findOne({ roll : roll ,name : place });

            if(inhomethere)
                return res.status(200).json({ msg: "Name Already There", status: 'war' });  //422

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

            const newoe = new totalvisiters(userData);
            await newoe.save();
            
            const newoe2 = new visitershomehistorys(userData);
            await newoe2.save();
        
        }

        return res.status(200).json({ msg: "Visiter send College Successfully", status: true }); //201

    } catch (err) {
        console.error(err);
        return res.status(200).json({ msg: "Internal Server Error", status: false });  //500
    }
};


const findInTotalVisitersAndFindInVisitersHomeAndSendToCollege = async (req, res) => {

    try {

        const roll = req.params.id;
        console.log(roll);

        const a1 = await totalvisiters.find({ roll: roll });
        if (!a1) {
            return res.status(200).json({ msg: "Visitors Not Found", status: false }); //404
        }

        else{

        return res.status(200).json(a1);
        
        }


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



const deleteVisitor = async(req,res)=>{


    try{


        const localeDate = new Date(Date.now()).toLocaleString();
        const [date, time] = localeDate.split(', '); // Splitting the date and time
        console.log("Date:", date); // Example: 11/16/2024
        console.log("Time:", time); 

        const roll = req.params.id;

        const visFound = await totalvisiters.findByIdAndDelete(roll);

        if(visFound)
        {

            let x = await visitershomehistorys.findOneAndUpdate(
                { roll : visFound.roll,outdate : '-' ,outtime : '-'}, // Filter
                { $set: { outdate: date , outtime: time } }, // Update
                { new: true, runValidators: true } // Options
            );

                console.log(`x ; ${x}`);
        

            return res.status(200).json({ msg: "Visiter Send Out Successfully", status: true });  //201

        }
        return res.status(200).json({ msg: "Usewr Not Found", status: 'war' });  //404

    } catch (error)
    {
        return res.status(500).json({ msg: "Internal Server Error", status: false }); //500
    }

}


module.exports = {getAllVisitersFromHome,findInTotalVisitersAndFindInCollegeVisitersAndSendVisitersHome,findInTotalVisitersAndFindInVisitersHomeAndSendToCollege,getAllVisitersinCollege,visitersHomeHistory,deleteVisitor};

const express = require("express");
const route = express.Router();

//boys home 
// const { create,finduser,updateUser,del,getAll,findInTotalBoysAndFindInCollegeBoysAndSendBoysHome,TotalBoysInHome,findingABoyInHome ,findingABoyCollege,findInTotalBoysAndFindInBoysHomeAndSendToCollege,boysHomeHistory} = require("../../Controllers/boys/index.js");



//total boys


// route.post("/totalboys",create);
// route.get("/totalboys/:id",finduser);

// route.put("/totalboys/:id",updateUser);
// route.delete("/totalboys/:id",del);

// route.get("/boyshomes/:id",findingABoyInHome);

// route.get("/boysin/:id",findingABoyCollege);

//boys home

const {getAllFromHome,findInTotalBoysAndFindInCollegeBoysAndSendBoysHome,findInTotalBoysAndFindInBoysHomeAndSendToCollege,TotalBoysInHome,boysHomeHistory} = require("../../Controllers/boys/boyshome.js");

route.get("/boyshome/all/",getAllFromHome);
route.put("/boyshome/out/:id",findInTotalBoysAndFindInCollegeBoysAndSendBoysHome);
route.put("/boyshome/in/:id",findInTotalBoysAndFindInBoysHomeAndSendToCollege);
route.get("/boyshome/check/",TotalBoysInHome);
route.get("/boyshome/history/",boysHomeHistory);


//boys outing 

const { getAllBoysFromOuting,findInTotalBoysAndFindInCollegeBoysAndSendBoysOuting,findInTotalBoysAndFindInBoysOutingAndSendToCollege,TotalBoysInOuting,boysOutingHistory } = require("../../Controllers/boys/boysouting.js");

route.get("/boysouting/all/",getAllBoysFromOuting);
route.put("/boysouting/out/:id",findInTotalBoysAndFindInCollegeBoysAndSendBoysOuting);
route.put("/boysouting/in/:id",findInTotalBoysAndFindInBoysOutingAndSendToCollege);
route.get("/boysouting/check/",TotalBoysInOuting);
route.get("/boysouting/history/",boysOutingHistory);











module.exports = route;
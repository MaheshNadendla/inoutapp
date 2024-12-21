
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


//girls home

const {getAllGirlsFromHome,findInTotalGirlsAndFindInCollegeGirlsAndSendGirlsHome,findInTotalGirlsAndFindInGirlsHomeAndSendToCollege,TotalGirlsInHome,girlsHomeHistory} = require("../../Controllers/girls/girlshome.js");

route.get("/girlshome/all/",getAllGirlsFromHome);
route.put("/girlshome/out/:id",findInTotalGirlsAndFindInCollegeGirlsAndSendGirlsHome);
route.put("/girlshome/in/:id",findInTotalGirlsAndFindInGirlsHomeAndSendToCollege);
route.get("/girlshome/check/",TotalGirlsInHome);
route.get("/girlshome/history/",girlsHomeHistory);


//girls outing 

const { getAllGirlsFromOuting,findInTotalGirlsAndFindInCollegeGirlsAndSendGirlsOuting,findInTotalGirlsAndFindInGirlsOutingAndSendToCollege,TotalGirlsInOuting,girlsOutingHistory } = require("../../Controllers/girls/girlsouting.js");

route.get("/girlsouting/all/",getAllGirlsFromOuting);
route.put("/girlsouting/out/:id",findInTotalGirlsAndFindInCollegeGirlsAndSendGirlsOuting);
route.put("/girlsouting/in/:id",findInTotalGirlsAndFindInGirlsOutingAndSendToCollege);
route.get("/girlsouting/check/",TotalGirlsInOuting);
route.get("/girlsouting/history/",girlsOutingHistory);


//staffs home

const {getAllStaffsFromHome,findInTotalStaffsAndFindInCollegeStaffsAndSendStaffsHome,findInTotalStaffsAndFindInStaffsHomeAndSendToCollege,TotalStaffsInHome,staffsHomeHistory} = require("../../Controllers/staffs/staffshome.js");

route.get("/staffshome/all/",getAllStaffsFromHome);
route.put("/staffshome/out/:id",findInTotalStaffsAndFindInCollegeStaffsAndSendStaffsHome);
route.put("/staffshome/in/:id",findInTotalStaffsAndFindInStaffsHomeAndSendToCollege);
route.get("/staffshome/check/",TotalStaffsInHome);
route.get("/staffshome/history/",staffsHomeHistory);


//visiters home

const {getAllVisitersFromHome,findInTotalVisitersAndFindInCollegeVisitersAndSendVisitersHome,findInTotalVisitersAndFindInVisitersHomeAndSendToCollege,getAllVisitersinCollege,visitersHomeHistory} = require("../../Controllers/visiters/visitershome.js");
route.get("/visitershome/all/",getAllVisitersFromHome);
route.put("/visitershome/in/:id",findInTotalVisitersAndFindInCollegeVisitersAndSendVisitersHome);
route.get("/visitershome/out/:id",findInTotalVisitersAndFindInVisitersHomeAndSendToCollege);
route.get("/visitershome/check/",getAllVisitersinCollege);
route.get("/visitershome/history/",visitersHomeHistory);





module.exports = route;
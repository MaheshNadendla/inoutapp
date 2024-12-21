//visiters home

const {getAllVisitersFromHome,findInTotalVisitersAndFindInCollegeVisitersAndSendVisitersHome,findInTotalVisitersAndFindInVisitersHomeAndSendToCollege,TotalVisitersInHome,visitersHomeHistory} = require("../../Controllers/visiters/visitershome.js");
route.get("/visitershome/all/",getAllVisitersFromHome);
route.put("/visitershome/out/:id",findInTotalVisitersAndFindInCollegeVisitersAndSendVisitersHome);
route.put("/visitershome/in/:id",findInTotalVisitersAndFindInVisitersHomeAndSendToCollege);
route.get("/visitershome/history/",visitersHomeHistory);


//staffs home

const {getAllStaffsFromHome,findInTotalStaffsAndFindInCollegeStaffsAndSendStaffsHome,findInTotalStaffsAndFindInStaffsHomeAndSendToCollege,TotalStaffsInHome,staffsHomeHistory} = require("../../Controllers/staffs/staffshome.js");

route.get("/staffshome/all/",getAllStaffsFromHome);
route.put("/staffshome/out/:id",findInTotalStaffsAndFindInCollegeStaffsAndSendStaffsHome);
route.put("/staffshome/in/:id",findInTotalStaffsAndFindInStaffsHomeAndSendToCollege);
route.get("/staffshome/check/",TotalStaffsInHome);
route.get("/staffshome/history/",staffsHomeHistory);
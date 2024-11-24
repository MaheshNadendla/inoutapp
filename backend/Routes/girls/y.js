//girls outing 

const { getAllGirlsFromOuting,findInTotalGirlsAndFindInCollegeGirlsAndSendGirlsOuting,findInTotalGirlsAndFindInGirlsOutingAndSendToCollege,TotalGirlsInOuting,girlsOutingHistory } = require("../../Controllers/girls/girlsouting.js");

route.get("/girlsouting/all/",getAllGirlsFromOuting);
route.put("/girlsouting/out/:id",findInTotalGirlsAndFindInCollegeGirlsAndSendGirlsOuting);
route.put("/girlsouting/in/:id",findInTotalGirlsAndFindInGirlsOutingAndSendToCollege);
route.get("/girlsouting/check/",TotalGirlsInOuting);
route.get("/girlsouting/history/",girlsOutingHistory);
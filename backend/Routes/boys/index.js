
const express = require("express");
const route = express.Router();


const { create,finduser,updateUser,del,getAll,findInTotalBoysAndFindInCollegeBoysAndSendBoysHome,TotalBoysInHome,findingABoyInHome } = require("../../Controllers/boys/index.js");
route.post("/totalboys",create);
route.get("/totalboys/:id",finduser);
route.get("/totalboys/",getAll);
route.put("/totalboys/:id",updateUser);
route.delete("/totalboys/:id",del);

route.put("/boyshomes/:id",findInTotalBoysAndFindInCollegeBoysAndSendBoysHome);
route.get("/boyshomes/",TotalBoysInHome);
route.get("/boyshomes/:id",findingABoyInHome);




module.exports = route;

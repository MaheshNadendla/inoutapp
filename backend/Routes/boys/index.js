
const express = require("express");
const route = express.Router();


const { create,finduser,updateUser,del,getAll,findInTotalBoysAndFindInCollegeBoysAndSendBoysHome } = require("../../Controllers/boys/index.js");
route.post("/totalboys",create);
route.get("/totalboys/:id",finduser);
route.get("/totalboys/",getAll);
route.put("/totalboys/:id",updateUser);
route.delete("/totalboys/:id",del);

route.put("/boyshomes/:id",findInTotalBoysAndFindInCollegeBoysAndSendBoysHome);



module.exports = route;

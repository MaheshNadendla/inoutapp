
const express = require("express");
const route = express.Router();

const { create,finduser,updateUser } = require("../../Controllers/boys/index.js");

route.post("/totalboys",create);
route.get("/totalboys/:id",finduser);
route.put("/totalboys/:id",updateUser);

module.exports = route;

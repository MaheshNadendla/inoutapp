
const express = require("express");
const route = express.Router();

const { create,finduser } = require("../../Controllers/boys/index.js");

route.post("/totalboys",create);
route.get("/totalboys/:id",finduser);

module.exports = route;

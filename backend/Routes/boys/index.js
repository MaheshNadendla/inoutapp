
const express = require("express");
const route = express.Router();

const { create } = require("../../Controllers/boys/index.js");

route.post("/totalboys",create);

module.exports = route;

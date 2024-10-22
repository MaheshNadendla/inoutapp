const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Route = require("./Routes/boys/index");



const app = express();



app.use(cors())
app.use(bodyParser.json());
require("dotenv").config();

app.use(Route);


const PORT = process.env.PORT || 8090;
const URL = process.env.MONGO_CONN;

mongoose.connect(URL).then(
        console.log("Mongoo DB Connected")
).catch((err)=>{
    console.log(err)
})


app.listen(PORT,(req,res)=>{
    console.log(`server is running on ${PORT}`);

})





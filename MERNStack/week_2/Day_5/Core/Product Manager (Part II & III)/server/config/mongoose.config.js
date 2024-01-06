const mongoose = require("mongoose");
require('dotenv').config();
const dbName = process.env.DB;
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;


//!don't forget to change the string 
const uri = `mongodb+srv://${username}:${pw}@cluster0.in7ozzd.mongodb.net/${dbName}?retryWrites=true&w=majority`


mongoose
    .connect(uri)
    .then(()=>
    console.log("✅✅✅Established a connection to the database✅✅✅"+ dbName)
    )
    .catch((err)=>
    console.log("❌❌❌Something went wrong connecting to the database❌❌❌",err)
    )

    module.exports =mongoose;
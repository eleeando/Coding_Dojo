const express = require("express");
const cors = require ("cors");

//Import environement variables(PORT)
const app = express();
require("dotenv").config();
const port= process.env.PORT;

//Add Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())

//Connect to DATABASE
require('./config/mongoose.config');

//Import Routes
require('./routes/author.routes')(app);

//Run server
app.listen(port, ()=>{
    console.log(`👋👋👋 Listenning to port 👋👋👋`+port);
})
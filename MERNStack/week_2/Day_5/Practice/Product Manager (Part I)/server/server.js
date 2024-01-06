const express =require ('express');
const cors = require('cors');
const app =express();


// Middlewares
app.use(cors(),express.json(),express.urlencoded({extended:true}));
require("dotenv").config();
const PORT = process.env.PORT


// DB connection
const mongoose =require ("./config/mongoose.config.js");

//Routes
require("./routes/product.routes.js")(app);

app.listen(PORT,()=>
    console.log(`listenning on port${PORT} for requests`)
);
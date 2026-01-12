const express = require('express');
const  cors = require('cors');

// app init 
const  app = express();

// middle ware 

app.use(express.json());  // allow  to parse json body 
app.use(cors());  // allow front end to communicate with backend

app.get('/',(req ,res)=>{
     res.send("Welcome to the Student API! 🚀");
})


module.exports = app;

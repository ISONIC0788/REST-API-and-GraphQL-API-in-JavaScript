const express = require('express');
const  cors = require('cors');
const studentRoutes = require('./routes/student.routes')

// app init 
const  app = express();

// middle ware 

app.use(express.json());  // allow  to parse json body 
app.use(cors());  // allow front end to communicate with backend

app.use('/api/students', studentRoutes);

app.get('/',(req ,res)=>{
     res.send("Welcome to the Student API! 🚀");
})


module.exports = app;

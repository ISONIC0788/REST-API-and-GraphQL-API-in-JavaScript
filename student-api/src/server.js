require('dotenv').config(); // loading environment variable c
const  app = require('./app');
const connectDB = require('./config/db');
const PORT = process.env.PORT;

connectDB();

app.listen(PORT,()=>{
    console.log(`✅ Server is running on port ${PORT}`);
})

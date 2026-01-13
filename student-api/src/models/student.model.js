const  mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String ,
        required: true,
        unique : true,
        lowercase:true
    },
    age: {
        type: Number,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
});

// Create the model from the schema

const Student = mongoose.model('Student' , studentSchema);

module.exports = Student;

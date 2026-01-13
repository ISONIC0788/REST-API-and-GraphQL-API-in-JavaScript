// this allow to handle https requests
const studentService = require('../service/student.service');

const createStudent = async (req , res) =>{
    try{
        const student = await studentService.createStudent(req.body);
        res.status(201).json(student);
    }catch (error){
        res.status(400).json({message: error.message});

    }
}

module.exports = {
    createStudent
}
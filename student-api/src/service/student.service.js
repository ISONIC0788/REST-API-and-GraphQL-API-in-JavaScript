const Student = require('../models/student.model');

const createStudent  = async (studentData)=>{
   const newStudent = await Student.create(studentData);
   return newStudent;
};

module.exports = {
    createStudent
}

const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student.controller');

// This connects the POST request to the Controller's "createStudent" function
router.post('/', studentController.createStudent);

module.exports = router;
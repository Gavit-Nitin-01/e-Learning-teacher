const express = require("express");
const Course = require('../models/Course');
const { validationResult, body } = require("express-validator");
const fetchteacher = require("../middleware/fetchteacher");
const Teacher = require("../models/Teacher");
const router = express.Router();

// const JWT_SECRET = 'ELEARNING';


//ROUTE 1: Create a Course using : POST "/api/course/createcourse"
router.post('/createcourse',fetchteacher, [
    body('Course_Id', 'Enter courseId').isLength({ min: 5 }),
    body('name', 'Enter valid name').isLength({min:3}),
    body('description', 'Enter short description').isLength({min:10})
], async (req, res) => {

    let success = false;

    //if there are errors, return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() })
    }
    try {
        //create new course
        const data = await Course.create({
            Course_Id: req.body.Course_Id,
            name: req.body.name,
            description: req.body.description,
            teacher : req.data
        })
        success = true;
        res.json(data)
        console.log(data)
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal server error")
    }
})


// ROUTE 2: Get All the Notes using: GET "/api/course/fetchcourse". Login required
router.get('/fetchCourse', fetchteacher, async (req, res) => {
    try {
        const notes = await Course.find({ teacher: req.data });
        res.json(notes)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router
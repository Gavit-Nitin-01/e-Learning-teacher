const express = require("express");
const Teacher = require('../models/Teacher');
const { validationResult, body } = require("express-validator");
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fetchteacher = require("../middleware/fetchteacher");

const JWT_SECRET = 'ELEARNING';


//ROUTE 1: Create a Teacher using : POST "/api/teacher/createteacher"

router.post('/createteacher', [
    body('name', 'Enter valid Name').isLength({ min: 3 }),
    body('phone', 'Enter valid NUmber'),
    body('email', 'Enter valid Email-Id').isEmail(),
    body('password', 'Enter valid password').isLength({ min: 5 })
], async (req, res) => {

    let success = false;

    //if there are errors, return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() })
    }


    try {


        let teacher = await Teacher.findOne({ email: req.body.email })
        //check wather the use with email exists already
        if (teacher) {
            return res.status(400).json({ success, errors: "soory the user with email exists already" })
        }

        //secret password
        const saltkey = await bcrypt.genSalt(10);
        secPass = await bcrypt.hash(req.body.password, saltkey)

        //create new student
        data = await Teacher.create({
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            password: secPass
        })



        success = true;
        res.json({ success, data })
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal server error")
    }
})


const createtoken = async (id) => {
    try {
        const token = await jwt.sign({ _id: id }, JWT_SECRET);
        return token;

    } catch (error) {
        return res.status(400).json({ error: "something wrrong" });
    }

}

// ROUTE 2: Atuthnticate a teacher using : POST "/api/teacher/login". No login requird
router.post('/login', [
    body('email', 'Enter valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
], async (req, res) => {

    let success = false;
    //If there are errors, rrturn bad reques and the errors 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body;
    try {
        let teacher = await Teacher.findOne({ email });
        if (!teacher) {
            success = false;
            return res.status(400).json({ error: "plase try to login correct credentials" })
        }

        const passCompare = await bcrypt.compare(password, teacher.password)
        if (!passCompare) {
            success = false;
            return res.json({ success, error: "plase try to login correct credentials" })
        } else {
            success = true;
            const tokenData = await createtoken(teacher._id);
            const teacherResult = {
                _id: teacher._id,
                name: teacher.name,
                phone: teacher.phone,
                email: teacher.email,
                password: teacher.password,
                token: tokenData
            }
            return res.json({success,teacherResult})
        }
       
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal server error")
    }

});


// ROUTE 3: Get all teacher Data : POST "/api/admin/getteacher".  login requird
router.post('/getteacher',fetchteacher, async (req, res) => {

    try {
        teacherD = req.data;
        const admin = await Teacher.findById(teacherD).select("-password")
        res.send(admin)
        console.log(admin)

    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal server error")
    }

})

module.exports = router
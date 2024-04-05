const express = require('express')
const Student = require('../models/Student');
const { validationResult, body } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const fetchstudent = require('../middleware/fetchstudent');

const JWT_SECRET = 'ELEARNING';

//ROUTE 1 : create a user using : POST "/api/student/createstd". Does/t require Auth
router.post('/createstd', [
    body('name', 'Enter valid Name').isLength({ min: 3 }),
    body('phone', 'Enter valid NUmber').isLength(10),
    body('email', 'Enter valid Email-Id').isEmail(),
    body('password', 'Enter valid password').isLength({ min: 5 }),
], async (req, res) => {
    let success = false;

    //If there are errors, return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() })
    }

    try {
        let student = await Student.findOne({ email: req.body.email, phone: req.body.phone })
        //check wather the use with email exists already
        if (student) {
            return res.status(400).json({ success, errors: "soory the user with email exists already" })
        }

        //secret password
        const salt = await bcrypt.genSalt(10);
        secPass = await bcrypt.hash(req.body.password, salt);

        //create new student
        student = await Student.create({
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            password: secPass
        })

        //create secret token
        const data = {
            student: {
                id: student.id
            }
        }

        const authtoken = jwt.sign(data, JWT_SECRET);
        console.log(authtoken)

        success = true;
        res.json({ success, authtoken })
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



// /ROUTE 2: Atuthnticate a student using : POST "/api/student/login". No login requird
router.post('/login', [
    body('email', 'Enter valid Email-Id').isEmail(),
    body('password', 'Enter valid password').isLength({ min: 5 }),
], async (req, res) => {
    let success = false;

    //If there are errors, return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        success = false
        return res.status(400).json({ success, errors: errors.array() })
    }

    const { email, password } = req.body;
    try {
        let student = await Student.findOne({ email });
        if (!student) {
            success = false;
            return res.status(400).json({ success, error: "plase try to login correct credentials" })
        }
        //compare to password 
        const passCompare = await bcrypt.compare(password, student.password);

        if (!passCompare) {
            success = true;
            const tokenData = await createtoken(student._id);
            const studentResult = {
                _id: student._id,
                name: student.name,
                phone: student.phone,
                email: student.email,
                password: student.password,
                token: tokenData
            }
             res.json(studentResult)
        } else {
            success = false;
            return res.status(400).json({ success, error: "plase try to correct credentials" })
        }

        // const data = {
        //     student: {
        //         id: student.id
        //     }
        // }

        // const authtoken = jwt.sign(data, JWT_SECRET);
        // console.log(authtoken)

        // success = true;
        // res.json({success,authtoken})

    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal server error")
    }

})


// ROUTE 3: Get all Student Data : POST "/api/admin/getstudent".  login requird
// router.post('/getstudent',fetchstudent, async (req, res) => {

//     try {
//         adminId = req.student.id;
//         const admin = await Student.findById(adminId).select("-password")
//         res.send(admin)

//     } catch (error) {
//         console.log(error.message)
//         res.status(500).send("Internal server error")
//     }

// })


module.exports = router
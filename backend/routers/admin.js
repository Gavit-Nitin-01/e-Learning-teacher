const express = require('express');
const Admin = require('../models/Admin');
const Student = require('../models/Student');
const { validationResult, body } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Teacher = require('../models/Teacher');
const fetchadmin = require('../middleware/fetchadmin');

const JWT_SECRET = 'ELEARNING';

//ROUTE 1 : create a admin using : POST "/api/admin/createadmin". Does/t require Auth
router.post('/createadmin', [
    body('name', 'Enter valid Name').isLength({ min: 3 }),
    body('phone', 'Enter valid NUmber').isLength(10),
    body('secretKey', 'Enter secret key').isLength(5),
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


        let admin = await Admin.findOne({ email: req.body.email })
        //check wather the use with email exists already
        if (admin) {
            return res.status(400).json({ success, errors: "soory the user with email exists already" })
        }

        //secret password
        const salt = await bcrypt.genSalt(10);
        secPass = await bcrypt.hash(req.body.password, salt);

        //secret key
        const saltkey = await bcrypt.genSalt(5);
        seckey = await bcrypt.hash(req.body.secretKey, saltkey);

        //create new student
        admin = await Admin.create({
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            secretKey: seckey,
            password: secPass
        })

        //create secret token
        const data = {
            admin: {
                id: admin.id
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


// /ROUTE 2: Atuthnticate a student using : POST "/api/admin/login". No login requird
router.post('/login', [
    body('secretKey', 'Enter secretKey'),
    body('email', 'Enter valid Email-Id').isEmail(),
    body('password', 'Enter valid password').isLength({ min: 5 }),
], async (req, res) => {
    let success = false;

    //If there are errors, return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() })
    }

    const { email, password, secretKey } = req.body;
    try {
        let admin = await Admin.findOne({ email });
        if (!admin) {
            success = false;
            return res.status(400).json({ success, error: "plase try to login correct credentials" })
        }
        //compare to password 
        const passCompare = await bcrypt.compare(password, admin.password)
        if (!passCompare) {
            success = false;
            return res.status(400).json({ success, error: "plase try to correct credentials" })
        }
        const keyCompare = await bcrypt.compare(secretKey, admin.secretKey)
        if (!keyCompare) {
            success = false;
            return res.status(400).json({ success, error: "plase try to correct credentials" })
        }

        const data = {
            admin: {
                id: admin.id
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





// /ROUTE 3: Feach all student data using : POST "/api/admin/fetchStudent".  login requird
router.get('/fetchStudent', async (req, res) => {
    let success = false;

    try {
        let student = await Student.find();
        if (student) {
            success = true;
            res.json(student)
        } else {
            res.json('data not found')
        }

    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal server error")
    }

})



// /ROUTE 4: Feach all Admin data using : POST "/api/admin/fetchAdmin".  login requird
router.get('/fetchAdmin', async (req, res) => {
    let success = false;

    try {
        let admin = await Admin.find();
        if (admin) {
            success = true;
            res.json(admin)
        } else {
            res.json('data not found')
        }

    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal server error")
    }

})


// ROUTE 5: Feach all Teacher data using : POST "/api/admin/fetchTeacher".  login requird
router.get('/fetchTeacher', async (req, res) => {
    let success = false;
q
    try {
        let teacher = await Teacher.find();
        if (teacher) {
            success = true;
            res.json(teacher)
        } else {
            res.json('data not found')
        }

    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal server error")
    }

})




// ROUTE 6: Get all Admin Data : POST "/api/admin/getadmin".  login requird
router.post('/getadmin',fetchadmin, async (req, res) => {

    try {
        adminId = req.admin.id;
        const admin = await Admin.findById(adminId).select("-password")
        res.send(admin)

    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal server error")
    }

})


module.exports = router
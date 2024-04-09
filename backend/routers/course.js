const express = require("express");
const Course = require('../models/Course');
const { validationResult, body } = require("express-validator");
const fetchteacher = require("../middleware/fetchteacher");
const CourseVideo = require("../models/CourseVideo");
const fetchcourse = require("../middleware/fetchcourse");
const router = express.Router();
const multer = require('multer');

// const JWT_SECRET = 'ELEARNING';



//multer to create a folder----------------------------------
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./Course-video");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname);
    },
});

const upload = multer({
    storage: storage
})

//ROUTE 1: Create a Course using : POST "/api/course/createcourse"
router.post('/coursevideo', fetchteacher, upload.single("file"), async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const teacher = req.data

    if (Array.isArray(req.files.video) && req.files.video.length > 0) {
        for (let video of req.files.videos) {
          videosPaths.push("/" + video.path);
        }
      }

    try {
        const data = await CourseVideo.create({ title: title,description: description,video: videosPaths, teacher:teacher});
        res.send({ status: "ok", data })
        console.log(data)

    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal server error")
    }
});


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



// // ROUTE 3: Add Video in Course List: POST "/api/course/coursevideo". Login required
// router.post('/coursevideo', fetchteacher, async (req, res) => {


//     const title = req.body.title;
//     const description = req.body.description;
//     // const filename = req.file.filename; 
//     // const image = req.body.image;
//     const teacher = req.data

//     try {
//         const data = await CourseVideo.create({ title: title , description: description,teacher:teacher});
//         res.send({ status: "ok", data })
//         console.log(data)

//     } catch (error) {
//         console.log(error.message)
//         res.status(500).send("Internal server error")
//     }
// });




module.exports = router
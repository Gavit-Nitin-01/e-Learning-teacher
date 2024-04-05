const express = require('express');
const router = express.Router();
const Notes = require("../models/Notes");
const multer = require('multer');
const fetchteacher = require('../middleware/fetchteacher');


//Multer -----------------------------------------------

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./Notes-file");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname);
    },
});

const upload = multer({
    storage: storage
})


//ROUTE 1 : Add Teacher Notes using : POST "/api/notes/addnotes". Does/t require Auth
// router.post('/addnotes', upload.single("file"), async (req, res) => {
//     // console.log(req.file)
//     // res.send("thanks")

//     const title = req.body.title;
//     const filename = req.file.filename;
//     const image = req.body.image;
//     const description = req.body.description;
//     const teacher = req.body._id

//     try {
//         const data = await Notes.create({ title: title, pdf: filename, image: image, description: description, teacher: teacher })
//         res.send({ status: "ok", data })
//         console.log(data)

//     } catch (error) {
//         console.log(error.message)
//         res.status(500).send("Internal server error")
//     }
// });


// ROUTE 2: Get all Notes : GET "/api/notes/getnotes".  login requird
// router.get('/fetchnotes', async (req, res) => {
//     let success = false;
//     try {
//         let notes = await Notes.find();
//         if (Notes) {
//             success = true;
//             res.json(notes)
//         } else {
//             res.json('data not found')
//         }

//     } catch (error) {
//         console.log(error.message)
//         res.status(500).send("Internal server error")
//     }

// })




router.post('/addnotes', fetchteacher, upload.single("file"), async (req, res) => {


    const title = req.body.title;
    const description = req.body.description;
    const filename = req.file.filename;
    const image = req.body.image;
    const teacher = req.data

    try {
        const data = await Notes.create({ title: title,pdf: filename, image: image, description: description,teacher:teacher});
        res.send({ status: "ok", data })
        console.log(data)

    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal server error")
    }
});


// ROUTE 1: Get All the Notes using: GET "/api/notes/getuser". Login required
router.get('/fetchallnotes', fetchteacher, async (req, res) => {
    try {
        const notes = await Notes.find({ teacher: req.data });
        res.json(notes)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


module.exports = router
const { default: mongoose } = require("mongoose");


const { Schema } = mongoose;

const CourseVideoSchema = new Schema({
    teacher:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'teacher'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    video: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});
const CourseVideo = mongoose.model("coursevideo", CourseVideoSchema);
module.exports = CourseVideo;
const { default: mongoose } = require("mongoose");


const { Schema } = mongoose;

const CourseSchema = new Schema({
    teacher:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'teacher'
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});
const Course = mongoose.model("course", CourseSchema);
module.exports = Course;
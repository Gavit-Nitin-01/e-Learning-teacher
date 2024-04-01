const { default: mongoose } = require("mongoose");


const { Schema } = mongoose;

const TeacherSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        "minimum": 10,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});
const Teacher = mongoose.model("teacher", TeacherSchema);
module.exports = Teacher;
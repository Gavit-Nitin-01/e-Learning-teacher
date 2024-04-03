const { default: mongoose } = require("mongoose");


const { Schema } = mongoose;

const NotesSchema = new Schema({
    teacher:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'teacher'
    },
    title: {
        type: String,
        required: true
    },
    pdf: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});
const Notes = mongoose.model("notes", NotesSchema);
module.exports = Notes;
const { default: mongoose } = require("mongoose");


const { Schema } = mongoose;

const AdminSchema = new Schema({
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
    secretKey: {
        type: String,
        required: true,
        minimum:5
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
const Admin = mongoose.model("admin", AdminSchema);
module.exports = Admin;
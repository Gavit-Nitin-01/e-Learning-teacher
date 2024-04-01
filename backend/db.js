const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017/E-learning"

const connectToMongo = () =>{
    mongoose.connect(mongoURI).then(()=>console.log('database connected successfulyu'))
}

module.exports = connectToMongo;
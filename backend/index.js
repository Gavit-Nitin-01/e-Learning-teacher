const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors');

connectToMongo();
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
// app.get('/',(req,res)=>{
//     res.send('this backend');

// })


//Availabel Api for E-learning 

//student
app.use('/api/student',require('./routers/student'))


//Admin
app.use('/api/admin',require('./routers/admin'))


//Teacher api
app.use('/api/teacher',require('./routers/teacher'))


app.listen(port,()=>{
    console.log(`E-Learning backend at : http://localhost:${port}`)
})
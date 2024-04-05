const jwt = require('jsonwebtoken');

const JWT_SECRET = 'ELEARNING';

const fetchstudent = (req,res,next) =>{
    //Get the Admin from the jwt token adn add id to req object
    const token = req.header('auth-token');
    if(!token) {
        res.status(401).send({error: "please authenticatesing a valid token"})
    }

    try {
        const data = jwt.verify(token,JWT_SECRET);
        req.student = data.student;
        next();
    } catch (error) {
        res.status(401).send({error: "please authenticatesing a valid token"})
    }
}


module.exports = fetchstudent;
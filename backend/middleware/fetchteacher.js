const jwt = require('jsonwebtoken');

const JWT_SECRET = 'ELEARNING';

const fetchteacher = (req, res, next) => {
    //Get the user from the jwt token and id to req object
    const token = req.header('auth-token');

    if (!token) {
        res.status(401).send({ error: "please authenticate using a valid token" })
    }

    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.teacher = data.teacher;
        next()
    } catch (error) {
        res.status(401).send({ error: "please authenticate using a valid token" })
    }
}

module.exports = fetchteacher;
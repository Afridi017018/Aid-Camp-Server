const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../secret');




const verifyToken = (req, res, next) => {
    const token = req?.cookies?.token;
    if (!token) {
        return res.status(401).json({ message: 'unauthorized access' })
    }
    jwt.verify(token, jwtSecret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'unauthorized access' })
        }
        req.user = decoded;
        
        next();
    })
}



module.exports = {verifyToken}
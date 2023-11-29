const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../secret');


const accessToken = async (req, res) => {
    const { email } = req.body;
    
    const token = jwt.sign(email, jwtSecret);

    res.cookie('token', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'none'
    }).json({ success: true });

}


module.exports = {accessToken}
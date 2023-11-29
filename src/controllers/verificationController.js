const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../secret');


const accessToken = async (req, res) => {

    try {
        const { email } = req.body;

        const token = jwt.sign(email, jwtSecret);

        res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'none'
        }).json({ success: true });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });

    }

}



const logout = async (req, res) => {

    try {
        // console.log("User Logged out: ", req.body.user);
        res.clearCookie('token', {
            maxAge: 0,
            httpOnly: true,
            secure: true,
            sameSite: 'none',
        }).json({ success: true });


    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }

}


module.exports = { accessToken, logout }
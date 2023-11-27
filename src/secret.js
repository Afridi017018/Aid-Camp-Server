require('dotenv').config();

const port = process.env.PORT || 5000;
const mongoUrl = process.env.MONGO_URL;
const jwtSecret = process.env.JWT_SECRET;
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;


module.exports = {port, mongoUrl, jwtSecret, stripeSecretKey} ;
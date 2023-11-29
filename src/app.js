const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');


const verificationRouter = require('./routers/verificationRouter')
const userRouter = require('./routers/userRouter')
const campRouter = require('./routers/campRouter')
const joinCampRouter = require('./routers/joinCampRouter')
const feedbackRouter = require('./routers/feedbackRouter')
const professionalRegRouter = require('./routers/professionalRegRouter');
const { verifyToken } = require('./middlewares/verifyToken');


app.use(cors({
    origin: [
        'http://127.0.0.1:5173',
        'http://localhost:5173',

    ],
    credentials: true
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());




app.get('/', verifyToken,(req,res)=>{
    res.send("hiiiiiiii")
})


app.use('/api/verification', verificationRouter)
app.use('/api/user', userRouter);
app.use('/api/camp', campRouter);
app.use('/api/join', joinCampRouter);
app.use('/api/feedback', feedbackRouter);
app.use('/api/professional', professionalRegRouter);


module.exports = app;
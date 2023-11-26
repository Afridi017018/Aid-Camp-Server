const express = require('express');
const app = express();
const cors =  require('cors');

const userRouter = require('./routers/userRouter')
const campRouter = require('./routers/campRouter')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/user',userRouter);
app.use('/api/camp',campRouter);


module.exports = app;
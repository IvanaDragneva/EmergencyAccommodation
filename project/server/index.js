const express = require('express');
const app = express();

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
const apiRouter = require('./api/index');
const path = require('path');
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());
app.use('/api', apiRouter);




app.listen(3001, () => {
    console.log('Server is listening');
})
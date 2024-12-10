import express from 'express'
import {connectDB} from './config/db.js'
//import assetRouter from './routes/assetRoutes.js';
//import employeeRouter from './routes/employeeRoutes.js';

const PORT = process.env.PORT || 6060;

const app = express()
// DB call
connectDB();

app.use(express.json());

//app.use('/assets', assetRouter);
//app.use('/employee', employeeRouter);
//app.use('/assets', assetRouter);
//app.use('/assets', assetRouter);
//app.use('/assets', assetRouter);



app.get("/",(req,res) => {
    res.send("Server running")
})

app.listen(PORT, (req,res) => {
    console.log(`Server is running on ${PORT}`)
})



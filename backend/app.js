import express from 'express'
import {connectDB} from './config/db.js'
const PORT = process.env.PORT || 5050;
import { assetRouter } from './routes/assetRoutes.js';
const app = express()
// DB call
connectDB();

app.use(express.json());

app.use('/api/asset', assetRouter)

app.get("/",(req,res) => {
    res.send("Server running")
})

app.listen(PORT, (req,res) => {
    console.log(`Server is running on ${PORT}`)
})



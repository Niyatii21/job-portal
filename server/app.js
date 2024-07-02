import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import cookieParser from "cookie-parser";
import connectDb from './Config/db.js'
import cors from 'cors'
import path from 'path';
const PORT = process.env.PORT || 5000
const app = express()

connectDb()




app.get('/', (req, res) => {
    res.send('server is working')
})


app.listen(PORT, () => console.log('server started'))
import express from "express";
import connectDb from "./mongoDb/index.js";
import dotenv from "dotenv";
const app = express()

// dotenv.config({
//     path: './.env'
// })

dotenv.config()
connectDb()
.then(()=>{
    app.listen(process.env.port || 4000, ()=>{
        console.log("server is running on port::--->", process.env.port)
    })
})
.catch((err)=>{
    console.log("MongoDb connection failed---->", err)
})
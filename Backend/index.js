const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const bodyparser = require("body-parser")
// const ToursModel = require('./models/Tours')


const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/Trip-Planner")

app.post("/")



app.listen(3000, ()=>{
    console.log("Server is running.")
})
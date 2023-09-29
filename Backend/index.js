const express = require("express");
const app = express()
const mongoose = require("mongoose");
const cors = require("cors")
const ToursModel = require("./models/Tours.js")
const HomeModel = require("./models/home.js")
const StoriesModel = require("./models/stories.js");
const PlannerModel = require("./models/planner.js");
const BlogModel = require("./models/blog.js");

require("dotenv").config();

// For online Deployment
// app.use(cors(
//     {

//         origin : ['https://nomadics.vercel.app'],
//         methods : ['POST', 'GET'],
//         credentials : true
//     }
// ))

app.use(cors())
app.use(express.json())


// mongoose.connect("mongodb://127.0.0.1:27017/Trip-Planner")

mongoose.connect("mongodb+srv://explorenomadictrips:SRKS2003@cluster0.lu4bqm2.mongodb.net/Trip-Planner?retryWrites=true&w=majority")



app.get("/gettours", (req,res)=>{
    ToursModel.find()
    .then(tours => res.json(tours))
    .catch(err => res.json(err))
})

app.get("/gethomes", (req,res)=>{
    HomeModel.findOne({})
    .then(response => res.json(response))
    .catch(err => res.json(err))
})

app.get("/getstories", (req,res)=>{
    StoriesModel.find()
    .then(response => res.json(response))
    .catch(err => res.json(err))
})

app.post("/getplanner", (req,res)=>{
    const cityname = req.body.cityname;

    PlannerModel.findOne({cityname: cityname})
    .then(response => res.json(response))
    .catch(err => res.json(err))
})

app.get("/blogs/:cityname", (req,res)=>{
    const cityname = req.params.cityname;
    BlogModel.findOne({name : cityname})
    .then(response => res.json(response))
    .catch(err => res.json(err))
})





app.listen(3001, ()=>{
    console.log("Server is running.")
})

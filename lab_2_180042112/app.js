const express = require('express')
const app = express()
const userRoutes = require("./routes/userRoutes.routes")

// app.use("/users/",userRoutes) // localhost:7777/users/register
app.use(userRoutes) // localhost:7777/register

app.get("/", (req,res)=>{
    res.send("<H1>Homepage - get request</H1>")
})
app.post("/", (req,res)=>{
    res.send("<H1>Homepage - post request</H1>")
})
app.get("/about", (req,res)=>{
    res.append("id","180042112")
    // res.cookie("username","afzal")
    // res.clearCookie("username")
    res.send("<H1>About</H1>")
})
app.get("/contact", (req,res)=>{
    res.json({name:"John Reese",profession:"NA"})
})
app.use((req,res)=>{
    res.status(401).send("error 404. Page does not exist")
})
module.exports = app;
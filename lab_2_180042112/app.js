const express = require('express')
const app = express()

app.get("/", (req,res)=>{
    res.send("<H1>Homepage - get request</H1>")
})
app.post("/", (req,res)=>{
    res.send("<H1>Homepage - post request</H1>")
})
app.get("/about", (req,res)=>{
    res.cookie("dummy_cookie","afzal")
    // res.clearCookie("dummy_cookie")
    res.send("<H1>About</H1>")
})
app.get("/contact", (req,res)=>{
    res.send("<H1>Contact</H1>")
})
app.use((req,res)=>{
    res.status(401).send("error 404. Page does not exist")
})
module.exports = app;
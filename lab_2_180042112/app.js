const express = require('express')
const app = express()

app.get("/", (req,res)=>{
    res.send("<H1>Homepage</H1>")
})
app.get("/about", (req,res)=>{
    res.send("<H1>About</H1>")
})
app.get("/contact", (req,res)=>{
    res.send("<H1>Contact</H1>")
})
app.use((req,res)=>{
    res.send("error 404. Page does not exist")
})
module.exports = app;
const express = require('express')
const router = express.Router()

router.get("/",(req,res)=>{
    res.send("<H1>Homepage</H1>")
})
router.get("/dashboard",(req,res)=>{
    res.render("dashboard.ejs")
})

module.exports=router
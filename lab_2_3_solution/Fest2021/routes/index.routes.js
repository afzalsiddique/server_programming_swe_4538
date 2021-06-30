const express = require('express')
const router = express.Router()
const ensureIsAuthenticated = require("./../middlewares/auth.middleware")

router.get("/",(req,res)=>{
    res.send("<H1>Homepage</H1>")
})
router.get("/dashboard",ensureIsAuthenticated,(req,res)=>{
    res.render("dashboard.ejs")
})

module.exports=router
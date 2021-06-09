const express = require('express')
const router = express.Router()

router.get("/login", (red,res)=>{
    res.send("this is login page")
})

router.get("/register", (red,res)=>{
    res.send("this is register page")
})

module.exports = router
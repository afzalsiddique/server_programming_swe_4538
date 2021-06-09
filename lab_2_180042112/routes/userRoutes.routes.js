const express = require('express')
const router = express.Router()

router.get("/login", (req,res)=>{
    // const id = req.query.id
    // const username = req.query.username
    const {id,username}=req.query
    res.send(`user with ID ${id} and Username ${username} is requesting to login`)
})

router.get("/register", (req,res)=>{
    res.sendFile("register.html",{root:"./views/users/"});
    // res.send("this is register page")
})

module.exports = router
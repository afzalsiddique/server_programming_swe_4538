const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const isLoggedIn = require('./../middlewares/auth.middlewares')

router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.json())

router.get("/login", (req,res)=>{
    // const id = req.query.id
    // const username = req.query.username
    const {id,username}=req.query
    res.send(`THIS IS LOGIN PAGE. user with ID ${id} and Username ${username} is requesting to login`)
})

router.get("/dashboard/:id/:username", (req,res)=>{
    const id = req.params.id
    const username = req.params.username

    // localhost:7777/users/dashboard/7/afzal
    res.send( `user with ID ${id} and Username ${username} is requesting to access dashboard`) 
})

router.get("/dashboard",(req,res)=>{
    res.send('User Dashboard')
})

router.get("/register", (req,res)=>{
    res.sendFile("register.html",{root:"./views/users/"});
    // res.send("this is register page")
})
router.post("/register", isLoggedIn,(req,res)=>{
    // const username = req.body.username
    // const email = req.body.email
    // res.send(`<H1>user with E-mail ${email} and Username ${username} is requesting to register</H1>`)
    // // res.sendFile("register.html",{root:"./views/users/"});

    res.redirect("/dashboard")
})

module.exports = router
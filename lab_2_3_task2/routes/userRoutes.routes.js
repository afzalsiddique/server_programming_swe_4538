const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
// const isLoggedIn = require('./../middlewares/auth.middlewares')
const {getRegister,postRegister, getLogIn, getDashboard} = require('./../controllers/userController.controllers')

router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.json())

router.get("/login", getLogIn)

router.get("/dashboard/:id/:username", (req,res)=>{
    const id = req.params.id
    const username = req.params.username

    // localhost:7777/users/dashboard/7/afzal
    res.send( `user with ID ${id} and Username ${username} is requesting to access dashboard`) 
})

router.get("/dashboard", getDashboard)

// these two could be replace by one line
router.get("/register", getRegister)
// router.post("/register", isLoggedIn, postRegister)
router.post("/register", postRegister)
// one liner
// router.route('/register').all(isLoggedIn).get(getRegister).post(postRegister) 

module.exports = router
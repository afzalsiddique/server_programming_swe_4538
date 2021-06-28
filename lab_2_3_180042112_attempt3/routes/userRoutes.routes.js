const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const isLoggedIn = require('./../middlewares/auth.middlewares')
const {getRegister,postRegister, getLogIn, getDashboard} = require('./../controllers/userController.controllers')

router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.json())

router.get("/login", getLogIn)

router.get("/dashboard", getDashboard)

router.get("/register", getRegister)
router.post("/register",  postRegister)

module.exports = router
const express = require('express')
const router = express.Router()

const {getLogin,postLogin,getRegister,postRegister} = require('../controllers/users.controller')

router.get("/login",getLogin)
router.get("/register",getRegister)
router.post("/login",postLogin)
router.post("/register",postRegister)
router.get("/logout",(req,res)=>{
    req.logout()
    res.redirect("/users/login")
})

module.exports=router
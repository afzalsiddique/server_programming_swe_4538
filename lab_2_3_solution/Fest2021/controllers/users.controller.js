const User = require('../models/User.model')
const bcrypt = require('bcryptjs')
const passport = require('passport')
const getLogin = (req,res)=>{
    res.render("users/login.ejs")
}

const postLogin = (req,res,next)=>{
    passport.authenticate("local",{
        successRedirect: "/dashboard",
        failureRedirect: "/users/login",
        failureFlash: true,
    })(req,res,next)
    // const {email,password}= req.body
    // console.log(email)
    // console.log(password)
}

const getRegister = (req,res)=>{
    res.render("users/register.ejs",{errors:req.flash('errors')})
}

const postRegister = (req,res)=>{
    const {name,email,password,confirm_password} = req.body
    // Data validation
    const errors = []
    if (!name || !email || !password || !confirm_password)
        errors.push("all fields are required")
    if (password.length<6)
        errors.push("password must be atleast 6 characters")
    if (password!==confirm_password)
        errors.push("password do not match")

    if (errors.length>0){
        console.log(errors)
        req.flash("errors",errors)
        res.redirect("/users/register")
    }else{
        // Create new user
        User.findOne({email:email}).then((user)=>{
            if (user){
                errors.push("User already exists with this email")
                req.flash("error",errors)
                res.redirect("/users/register")
            }else{
                bcrypt.genSalt(10,(err,salt)=>{
                    if (err){
                        errors.push(err)
                        req.flash("errors",errors)
                        res.redirect("/users/register")
                    }else{
                        bcrypt.hash(password,salt,(err,hash)=>{
                            if (err){
                                errors.push(err)
                                req.flash("errors",errors)
                                res.redirect("/users/register")
                            }else{
                                const newUser = new User({
                                    name,email,password:hash
                                })
                                newUser.save().then(()=>{
                                    res.redirect("/users/login")
                                }).catch(()=>{
                                    errors.push("Error occured while inserting user to the database")
                                    req.flash("errors",errors)
                                    res.redirect("/users/register")
                                })
                            }
                        })
                    }
                })
            }
        })
        res.redirect("/users/login")
    }


}

module.exports={getLogin,postLogin,getRegister,postRegister}
const getLogin = (req,res)=>{
    res.render("users/login.ejs")
}

const postLogin = (req,res)=>{
    const {email,password}= req.body
    console.log(email)
    console.log(password)
}

const getRegister = (req,res)=>{
    res.render("users/register.ejs",{errors:req.flash('errors')})
}

const postRegister = (req,res)=>{
    const {name,email,password,confirm_password} = req.body
    console.log(name)
    console.log(email)
    console.log(password)
    console.log(confirm_password)

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
        res.redirect("/users/login")
    }


}

module.exports={getLogin,postLogin,getRegister,postRegister}
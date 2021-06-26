const getRegister = (req,res)=>{
    res.sendFile("register.html",{root:"./views/users/"});
}

const postRegister = (req,res)=>{
    const f_name = req.body.f_name
    const l_name = req.body.l_name
    const email = req.body.email
    const password = req.body.password
    const password2 = req.body.password2
    if (reg_validate(f_name,l_name,email,password,password2)){
        res.redirect("/login")
    }
    // const email = req.body.email
    // res.send(`<H1>user with E-mail ${email} and Username ${username} is requesting to register</H1>`)
    // // res.sendFile("register.html",{root:"./views/users/"});
    else{
        res.redirect("/register")
    }

}
const reg_validate = (f_name,l_name,email,password,password2)=>{
    if (f_name=="" || l_name=="" || email=="" || password=="" || password2=="")
        return false
    if (password.length<6)
        return false
    if (password!==password2)
        return false
    return true
}

const getLogIn = (req,res)=>{
    // const id = req.query.id
    // const username = req.query.username
    // const {id,username}=req.query
    // res.send(`THIS IS LOGIN PAGE. user with ID ${id} and Username ${username} is requesting to login`)
    res.sendFile("login.html",{root:"./views/users/"})
}

const getDashboard = (req,res)=>{
    res.send('User Dashboard')
}

module.exports = {getRegister,postRegister, getLogIn, getDashboard}
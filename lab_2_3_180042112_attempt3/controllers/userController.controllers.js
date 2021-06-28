const getRegister = (req,res)=>{
    res.sendFile("register.html",{root:"./views/users/"})
}

const postRegister = (req,res)=>{
    res.redirect("/dashboard")
}

const getLogIn = (req,res)=>{
    res.sendFile("login.html",{root:"./views/users/"})
}

const getDashboard = (req,res)=>{
    res.send('User Dashboard')
}

module.exports = {getRegister,postRegister, getLogIn, getDashboard}
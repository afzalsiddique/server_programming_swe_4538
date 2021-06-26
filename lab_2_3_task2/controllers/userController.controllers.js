const getRegister = (req,res)=>{
    res.sendFile("register.html",{root:"./views/users/"});
}

const postRegister = (req,res)=>{
    const username = req.body.username
    if (username=="admin"){
        res.redirect("/login")
    }
    // const email = req.body.email
    // res.send(`<H1>user with E-mail ${email} and Username ${username} is requesting to register</H1>`)
    // // res.sendFile("register.html",{root:"./views/users/"});
    else{
        res.redirect("/register")
    }

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
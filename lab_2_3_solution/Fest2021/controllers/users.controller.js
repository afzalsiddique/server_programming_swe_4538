const getLogin = (req,res)=>{
    res.render("users/login.ejs")
}

const postLogin = ()=>{

}

const getRegister = (req,res)=>{
    res.render("users/register.ejs")
}

const postRegister = ()=>{

}

module.exports={getLogin,postLogin,getRegister,postRegister: postRegister}
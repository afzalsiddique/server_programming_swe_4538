const isLoggedIn = (req,res,next)=>{
    if (req.method=="POST"){
        const email = req.body.email
        res.redirect("/users/login")
    }
    // else{
    //     next()
    // }
}

module.exports = isLoggedIn
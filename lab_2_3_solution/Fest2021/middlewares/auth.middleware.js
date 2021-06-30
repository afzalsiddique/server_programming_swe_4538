const ensureAuthenticated = (req,res,next)=>{
    if (req.isAuthenticated()){
        next()
    }else{
        res.flash('error. You do not have access')
        res.redirect("/users/login")
    }
}

module.exports = ensureAuthenticated
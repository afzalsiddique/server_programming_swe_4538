const con = require('../mysql_db_connection')
const isLoggedIn = (req,res,next)=>{
    if (req.method=="POST"){
        const email = req.body.email
        const password = req.body.password
        var flag=false;
        con.query(`SELECT password FROM auth_table where email='${email}'`, function (err, result, fields) {
            if (err) throw err;
            const retrieved_pass =JSON.parse(JSON.stringify(result))[0].password
            if (password===retrieved_pass)
                flag=true
            else
                flag=false
            if (flag)
                res.redirect('/dashboard')
            else
                res.redirect('/login')
        });
    }else{
        next()
    }
}
module.exports = isLoggedIn

// const postLogin = (req,res)=>{
//     if (login_validate(email,password)){
//         res.redirect("/dashboard")
//     }
//     else{
//         res.redirect("/login")
//     }
// }
// const login_validate= (email,password)=>{
//     var flag='initialValue';
//     con.query(`SELECT password FROM auth_table where email='${email}'`, function (err, result, fields) {
//         if (err) throw err;
//         const retrieved_pass =JSON.parse(JSON.stringify(result))[0].password
//         if (password===retrieved_pass)
//             flag=true
//         else
//             flag=false
//         if (flag){
            
//         }
//         // console.log(flag) // true
//     });
//     // console.log(flag) // initialValue. this line executes before con.query
// }
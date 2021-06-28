const con = require('../mysql_db_connection')
const bcrypt = require('bcrypt')
const saltRounds = 10
const getRegister = (req,res)=>{
    res.sendFile("register.html",{root:"./views/users/"});
}

const postRegister = (req,res)=>{
    const f_name = req.body.f_name
    const l_name = req.body.l_name
    const email = req.body.email
    const password = req.body.password
    const password2 = req.body.password2
    var newpassword="";
    if (reg_validate(f_name,l_name,email,password,password2)){
        console.log("Ready for insertion");

        bcrypt.genSalt(saltRounds).then(salt => {
            console.log(salt);
            return bcrypt.hash(password, salt)
            }).then(hash => {
                newpassword = hash
                var sql = `INSERT INTO auth_table (email, firstname,lastname,password) VALUES ('${email}', '${f_name}','${l_name}','${newpassword}')`;
                con.query(sql, function (err, result) {
                    if (err) throw err;
                    console.log("1 record inserted");
                    res.redirect("/login")
                });
            }
        )


        // bcrypt.hash(password, saltRounds, function(err, hash) {
        // var sql = `INSERT INTO auth_table (email, firstname,lastname,password) VALUES ('${email}', '${f_name}','${l_name}','${newpassword}')`;
        // con.query(sql, function (err, result) {
        //     if (err) throw err;
        //     console.log("1 record inserted");
        //     res.redirect("/login")
        //     });
        // });

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

const postLogin = (req,res)=>{

    const email = req.body.email;
    const password= req.body.password;
    con.query(`SELECT password FROM auth_table where email='${email}'`, function (err, result, fields) {
                 if (err) throw err;
                const retrieved_pass = result[0].password
            //   const retrieved_pass =JSON.parse(JSON.stringify(result))[0].password
            //   console.log(password)
            //   console.log(retrieved_pass)
            //     bcrypt.compare(password,retrieved_pass).then(res=>{
            //         console.log(res)
            //     }).catch(err=>console.error(err.message))
              bcrypt.compare(password, retrieved_pass, function(err, result) {
                if(!err)
                {
                    console.log('not adf error')
                    res.send("<H1>asdf</H1>")
                }
                else{
                    res.send("invalid password");
                }
    
});
})

}


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
// 
// }

const getDashboard = (req,res)=>{
    res.send('User Dashboard')
}

module.exports = {getRegister,postRegister, getLogIn, getDashboard,postLogin}
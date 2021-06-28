const db = require("./../db_connection");
const bcrypt = require('bcryptjs');
const alert = require('alert');
const sessionStorage = require('sessionstorage');

const getRegister = (req,res) => {
    res.sendFile("register.html",{root:"./views/users"});
}

const postRegister = async (req,res) => {
    const f_name = req.body.f_name;
    const l_name = req.body.l_name;
    const email = req.body.email;
    const password = req.body.password;
    const password2 = req.body.password2;
    const saltRounds = 8;

    db.query('SELECT email FROM auth_table WHERE email = ?',[email], async (err, result) => {
        if (err){
            console.log(error);
        }

        if (result.length > 0){
            alert("This Email is already in use");
        } else if(password.length < 6){
            alert("Password must consist at least 6 characters");
        } else{
            let hashed = await bcrypt.hash(password,8);
            db.query(`INSERT INTO auth_table SET ?`,{email:email,firstname:f_name,lastname:l_name,password:hashed},(err,result) =>{
                if(err) console.log(err);
                else{
                    console.log("User Registration Successful.");
                    res.redirect("/login");
                }
            })
        }
        });
}

const getLogin = (req,res) => {
    res.sendFile("login.html",{root:"./views/users"});
}

const postLogin = async (req,res) => {
    const email = req.body.email;
    const password = req.body.password;
    const saltRounds = 8;
    
    if(!email) alert("Please enter your email");
    else if(!password) alert("Please enter your Password");
    else{
        db.query(`SELECT * FROM auth_table WHERE email = ?`,[email],async(err,result) => {
            if(!result || !(await bcrypt.compare(password,result[0].password))){
                console.log(password)
                console.log(result[0].password)
                console.log("Invalid Credentials.");
                res.redirect("/login");
            }
            else{
                res.cookie('email',result[0].email);
                sessionStorage.setItem("email", email);
                res.redirect(`/dashboard`);
            }
        });
    } 
}

const getDashboard = (req,res) => {
    // const id = req.params.id;
    const email = sessionStorage.getItem("email")
    res.send(`<h1>User with Username - ${email} is requesting to access dashboard.</h1>`);
}

module.exports = {getRegister,postRegister,getLogin,getDashboard,postLogin};
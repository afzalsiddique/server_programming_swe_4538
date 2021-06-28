const con = require('../mysql_db_connection')
const bcrypt = require('bcrypt');
const saltRounds = 10;

const isLoggedIn =(req,res,next)=>{
    
    const email = req.body.email;
    const password= req.body.password;
    con.query(`SELECT password FROM auth_table where email='${email}'`, function (err, result, fields) {
                 if (err) throw err;
              const retrieved_pass =JSON.parse(JSON.stringify(result))[0].password
              console.log(password)
              console.log(retrieved_pass)
              bcrypt.compare(password, retrieved_pass, function(err, result) {
                if(result == true)
                {
                    next();
                }
                else{
                    res.send("invalid password");
                }
               
    
});



})}

module.exports = isLoggedIn
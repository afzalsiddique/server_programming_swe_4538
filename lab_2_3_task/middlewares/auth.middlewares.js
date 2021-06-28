const con = require('../mysql_db_connection')
const bcrypt = require('bcrypt');
const saltRounds = 10;

const isLoggedIn =(req,res,next)=>{
    
    const email = req.body.email;
    const password= req.body.password;
    con.query(`SELECT password FROM auth_table where email='${email}'`, function (err, result, fields) {
                 if (err) throw err;
               const retrieved_pass = result[0].password
              // const retrieved_pass =JSON.parse(JSON.stringify(result))[0].password
              console.log(password)
                console.log('between pass and hash')
              console.log(retrieved_pass)
              bcrypt.compare(password, retrieved_pass, function(err, result) {
                if(!err)
                {
                    console.log('not error')
                    res.send(` <head> <meta charset='utf-8'> <meta http-equiv='X-UA-Compatible' content='IE=edge'>
                                <meta name='viewport' content='width=device-width, initial-scale=1'> <title>Dashboard</title> </head>
                            <body> <H1> Dashboard  for ${email}</H1> </body> `
                    )
                }
                else{
                    res.send("invalid password");
                }
               
    
});



})
}

module.exports = isLoggedIn
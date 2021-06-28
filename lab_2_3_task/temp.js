// const connection = require('../connection')
// const bcrypt = require('bcrypt');
// const saltRound = 10;
// const getRegistration=(req,res)=>{
//     res.sendFile('form.html',{root:'./views'})
// }
// const sendData = (req,res)=>{
//     const email = req.body.email
//     const password = req.body.password
//
//     var newpassword = ''
//     bcrypt.genSalt(10).then(salt => {
//         console.log(Salt ${salt});
//         return bcrypt.hash(password, salt)
//     }).then(hash => {
//         newpassword = hash
//         const queryString = INSERT INTO user
//         (
//             email,password
//         )
//         VALUES
//         (
//                 ?, ?
//         )
//
//         connection.query(queryString, [email, newpassword], (err, rows, fields) => {
//             if (!err) {
//                 console.log("ok");
//             } else {
//                 console.log(err)
//             }
//         })
//     })
//         .catch(err => console.error(err.message))
//     res.send("ok")
// }
// module.exports={getRegistration,sendData}
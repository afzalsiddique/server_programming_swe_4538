const bcrypt=require('bcrypt');
const saltRound=10;
const planText="1234567"
const new_pass = "$2b$10$mvfX2HJ2dluEJo07W5jJjO1nO4kBx4l/z"

var password=''
bcrypt.genSalt(saltRound).then(salt=>{
    return bcrypt.hash(planText,salt)
}).then(hash=>{
        password=hash
        console.log(hash)
})
.catch(err=>console.error(err.message))

bcrypt.compare(planText,new_pass).then(res=>{
    console.log(res)
}).catch(err=>console.error(err.message))


// password = 1234567
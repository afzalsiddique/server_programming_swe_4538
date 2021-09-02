require('dotenv').config();
const user= process.env.UserEmail
const pass= process.env.UserPass

const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
        user: user,
        pass: pass
    }
})

const options={
    from:user,
    to: "deeepcoding@gmail.com",
    subject: "node mailer test email",
    text: "Hey if this mail comes to you. then it node mailer worked perfectly. Thanks."
}

transporter.sendMail(options, function (err, info){
    if (err){
        console.log(err)
        return
    }
    console.log("Sent: "+info.response)
})
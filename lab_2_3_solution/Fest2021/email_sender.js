const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
        user: "node-1224@outlook.com",
        pass: "Y5eWPsqUEUFFh2JN"
    }
})

const options={
    from:"node-1224@outlook.com",
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
require('dotenv').config()
const express = require('express')
const app = express()
const session = require('express-session')
const flash = require('connect-flash')
const mongose = require('mongoose')

// connect to DB
// console.log(process.env.MongoURI)
mongose.connect(process.env.MongoURI,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("connected to database")
}).catch((eror)=>{
    console.log("error occured while connecting to database")
    console.log(error)
})

// static resources
app.use(express.static("public"))
// View Engine
app.set("view engine", "ejs")
// use session and flash
app.use(session({
    secret:'secret',resave:true, saveUninitialized:true
}))
app.use(flash())

// Body Parser
app.use(express.urlencoded({extended: false}))

// routes
const index_routes = require('./routes/index.routes')
const users_routes = require('./routes/users.routes')
app.use(index_routes)
app.use("/users",users_routes)

module.exports=app
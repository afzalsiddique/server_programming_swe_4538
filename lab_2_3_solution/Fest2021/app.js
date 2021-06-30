const express = require('express')
const app = express()

// static resources
app.use(express.static("public"))
// View Engine
app.set("view engine", "ejs")

// routes
const index_routes = require('./routes/index.routes')
const users_routes = require('./routes/users.routes')
app.use(index_routes)
app.use(users_routes)

module.exports=app
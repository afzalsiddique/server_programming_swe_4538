const express = require('express')
const app = express()

// static resources
app.use(express.static("public"))
// View Engine
app.set("view engine", "ejs")

// routes
const index_routes = require('./routes/index.routes')
app.use(index_routes)

module.exports=app
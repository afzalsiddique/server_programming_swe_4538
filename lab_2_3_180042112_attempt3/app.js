const express = require('express')
const app = express()
const userRoutes = require("./routes/userRoutes.routes")


app.use(userRoutes) // localhost:7777/register
app.use(express.static("public"))


module.exports = app;
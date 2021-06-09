const express = require('express');
const app = express();
const PORT = 7777;

app.get("/", (req,res)=>{
    res.send("<H1>Homepage</H1>")
})
app.listen(PORT, ()=>{
    console.log("server is running at PORT ${PORT}");
});
const app = require('./app')
const PORT = 7777;

app.listen(PORT, ()=>{
    console.log("server is running at PORT ${PORT}.");
});
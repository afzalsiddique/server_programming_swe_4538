json_obj = require("./helloWorld")
// console.log(json_obj.name)
json_obj.Hello();

// set interval
setInterval(()=>{
    json_obj.Hello()
},1000)

setTimeout(()=>{
    console.log(json_obj.name)
},5000)
const http = require("http")
const json_obj = require("./loadContent")
about = json_obj.about

const server = http.createServer((request,response) => {
    
    // response.writeHead(201,{'Content-Type': "text/plain"})

    // response.write("<h1>Hello</h1>")
    // response.end()
    if(request.url=="/"){
        response.write("<h2>This is a base url</h2>")
        response.end()
    }
    else if (request.url=="/about"){
        response.write(about)
        response.end()
    } 
    else {
        response.write("<h2>This page don't exist</h2> <a href = '/'>Go To base</a>")
        response.end()
    }
})

module.exports = {server}
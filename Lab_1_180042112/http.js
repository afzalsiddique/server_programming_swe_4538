const http = require('http')
const data = require('./loadContent')



const final_server = http.createServer((request,response) => {
    
    // response.writeHead(201,{'Content-Type': "text/plain"})

    // response.write("<h1>Hello</h1>")
    // response.end()
    if(request.url=="/"){
        response.write(data.loadData.index)
        response.end()
    }
    else if (request.url=="/about"){
        response.write(data.loadData.about)
        response.end()
    }
    else if (request.url=="/blog"){
        response.write(data.loadData.blog)
        response.end()
    }
    else if (request.url=="/contact"){
        response.write(data.loadData.contact)
        response.end()
    }
    else if (request.url=="/pricing"){
        response.write(data.loadData.pricing)
        response.end()
    }
    else if (request.url=="/services"){
        response.write(data.loadData.service)
        response.end()
    }
    else if (request.url=="/work"){
        response.write(data.loadData.work)
        response.end()
    } 
    else {
        response.write("<h2>This page don't exist</h2> <a href = '/'>Go To base</a>")
        response.end()
    }
})

module.exports = {final_server}
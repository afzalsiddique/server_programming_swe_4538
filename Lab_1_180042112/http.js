const http = require('http')
const json_obj = require('./loadContent')

const index = json_obj.data.index
const about = json_obj.data.about
const blog = json_obj.data.blog
const contact = json_obj.data.contact
const pricing = json_obj.data.pricing
const service = json_obj.data.service
const work = json_obj.data.work

const final_server = http.createServer((request,response) => {
    
    response.writeHead(201,{'Content-Type': "text/html"})

    if(request.url=="/"){
        response.write(index)
        response.end()
    }
    else if (request.url=="/about"){
        response.write(about)
        response.end()
    }
    else if (request.url=="/blog"){
        response.write(blog)
        response.end()
    }
    else if (request.url=="/contact"){
        response.write(contact)
        response.end()
    }
    else if (request.url=="/pricing"){
        response.write(pricing)
        response.end()
    }
    else if (request.url=="/services"){
        response.write(service)
        response.end()
    }
    else if (request.url=="/work"){
        response.write(work)
        response.end()
    } 
    else {
        response.write("<h2>This page doesn't exist</h2> <a href = '/'>Go To base</a>")
        response.end()
    }
})

module.exports = {final_server}
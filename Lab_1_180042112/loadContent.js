const fs = require("fs");

const aboutData = fs.readFileSync('./contents/HTML/about.html',"utf-8")
const blogData = fs.readFileSync('./contents/HTML/blog.html',"utf-8")
const contactData = fs.readFileSync('./contents/HTML/contact.html',"utf-8")
const indexData = fs.readFileSync('./contents/HTML/index.html',"utf-8")
const pricingData = fs.readFileSync('./contents/HTML/pricing.html',"utf-8")
const serviceData = fs.readFileSync('./contents/HTML/services.html',"utf-8")
const workData = fs.readFileSync('./contents/HTML/work.html',"utf-8")

const loadData = {
    'about':aboutData,
    'blog':blogData,
    'contact': contactData,
    'index': indexData,
    'pricing': pricingData,
    'service': serviceData,
    'work': workData
}

module.exports = {loadData}
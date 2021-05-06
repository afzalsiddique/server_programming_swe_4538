const fs = require('fs')

fs.writeFileSync('./contents/demofile.txt','we are learning node.js. ')
fs.appendFileSync('./contents/demofile.txt','appending we are learning node.js')
fs.rename('./contents/demofile.txt','./contents/demofileRenamed.txt',(err)=>{
    if (err){
        console.log(err)
    }else{
        console.log('rename successful')
    }
})

fs.readFile('./contents/demofileRenamed.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})

// console.log('before')
// fs.readFile('./contents/demofileRenamed.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         fs.appendFile('./contents/demofileRenamed.txt','Is this a synchronus process?')
//         fs.readFile('./contents/demofileRenamed.txt','utf-8',(err,data)=>{
//             if(err){
//                 console.log(err)
//             }else{
//                 console.log(data)
//             }
//         })
//     }
// })
// console.log('after')

// deleting a file
// fs.unlink('./contents/demofileRenamed.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('delete successful')
//     }
// })
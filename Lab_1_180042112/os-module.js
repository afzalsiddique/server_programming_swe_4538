const os = require('os')

const userInfo = os.userInfo()
console.log(userInfo)

const uptime = os.uptime()
console.log(uptime)

const currentOS = {
    name: os.type(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}
console.log(currentOS)
const winston = require('winston')
const transports = require('winston-daily-rotate-file')

const logger = winston.createLogger({
    "filename": logs,
    

})
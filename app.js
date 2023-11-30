// COMMON JS
// const message = require('./message')
// console.log(message)
// console.log(message.name)
// console.log(message.role)

// const Message = require('./message')
// const message1 = new Message('Zak Ruvalcaba', 'Instructor')
// message1.sayHello()

// ES6 MODULE LOADING
// import Message from './message.js'
// const message1 = new Message('Zak Ruvalcaba', 'Instructor')
// message1.sayHello()

// Module wrapper function
// (function (exports, require, module, __filename, __dirname) {

// })
// console.log(__dirname)
// console.log(__filename)

// LOGGER
// import Logger from './logger.js'

// const logger = new Logger()

// logger.on('message', data => {
//     console.log('Called Listener', data)
// })

// logger.log('Hello World')
// logger.log('Hi')
// logger.log('Hello')

// WEB SERVER
import http from 'http'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'
import {} from 'dotenv/config'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const server = http.createServer((req, res) => {
    // Build file path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)

    // Log the filepath
    // console.log(filepath)

    // Extension of file
    let extname = path.extname(filePath)

    // Initial content type
    let contentType = 'text/html'

    // Check extension and set content type
    switch (extname) {
        case '.js':
            contentType = 'text/javascript'
            break
        case '.css':
            contentType = 'text/css'
            break
        case '.json':
            contentType = 'application/json'
            break
        case '.png':
            contentType = 'image/png'
            break
        case '.jpg':
            contentType = 'image/jpg'
            break
    }

    // Check if content type is text/html but no .html file extension
    if (contentType == 'text/html' && extname == '') {
        filePath += '.html'
    }

    // Read file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {
                // Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, { 'Content-Type': 'text/html'} )
                    res.end(content, 'utf8')
                })
            } else {
                // Some server error
                res.writeHead(500)
                res.end(`Server Error: ${err.code}`)
            }
        } else {
            // Success
            res.writeHead(200, { 'Content-Type': contentType })
            res.end(content, 'utf8')
        }
    })

})

// if (req.url === '/api/employees') {
//     const employees = [
//         { name: 'Sally Smith', title: 'CEO' },
//         { name: 'Frank Franklin', title: 'Director of Sales' },
//         { name: 'John Johnson', title: 'QA Manager' }
//     ]
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(employees))
// }

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

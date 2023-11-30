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
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) throw err
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(content)
        })
    } else if (req.url === '/about') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
            if (err) throw err
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(content)
        })
    } else if (req.url === '/products') {
        fs.readFile(path.join(__dirname, 'public', 'products.html'), (err, content) => {
            if (err) throw err
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(content)
        })
    } else if (req.url === '/api/employees') {
        const employees = [
            { name: 'Sally Smith', title: 'CEO' },
            { name: 'Frank Franklin', title: 'Director of Sales' },
            { name: 'John Johnson', title: 'QA Manager' }
        ]
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(employees))
    }
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
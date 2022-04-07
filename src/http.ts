import 'reflect-metadata'
import express from 'express'
import { createServer } from 'http'
import mongoose from 'mongoose'
import path from 'path'
import { Server } from 'socket.io'

const app = express()
const server = createServer(app)

mongoose.connect("mongodb://localhost/websocket")

app.use(express.static(path.join(__dirname, '..', 'public')))

const io = new Server(server)

// funciona como uma conexão global, todo cliente que se conectar passará pelo is.on
io.on('connection', (socket) => {
})

app.get('/', (request, response) => {
    return response.json({
        message: "OK"
    })
})

export { server, io }
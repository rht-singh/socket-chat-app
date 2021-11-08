const express = require('express');
const {Server} = require('socket.io')
const cors = require('cors');
const mongoose = require('mongoose');
let app = express()
const http = require('http').createServer(app)
const io = new Server(http)
const {MongoClient} = require("mongodb");
let Port = 8080

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
  });

 
        
  io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      socket.broadcast.emit('chat message', msg);         
    });
    
  });
    

http.listen(Port,()=> console.log(`server started with ${Port}`))


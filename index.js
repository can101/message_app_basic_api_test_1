const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.emit('hello');
});

server.listen(process.env.PORT, () => {
  console.log("listening on *:" + process.env.PORT);
});

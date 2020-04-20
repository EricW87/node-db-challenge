const express = require("express");

const MyRouter = require("./routers/my-router");

const server = express();

server.use(express.json());

server.use('/api', MyRouter);

server.get("/", (req, res) => {
    res.send("Try /api instead");
})

server.listen(5000, () => console.log("Server is running"));
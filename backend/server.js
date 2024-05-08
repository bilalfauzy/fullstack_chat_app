require('dotenv').config()
const express = require("express");
const { app, server} = require('./socket/socket')
const cors = require("cors");
const connectDB = require('./db/connectDB');
const setRoutes = require('./routes/routes');
const cookieParser = require('cookie-parser')
const path = require('path')

app.use(cors());
app.use(express.json());
app.use(cookieParser())
setRoutes(app)

const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, async() => {
    connectDB()
    console.log(`Server is live at ${PORT}`)
});

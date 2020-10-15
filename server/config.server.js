const express = require("express");

const app = express()

app.get("/", (req, res) => res.json({message: "Welcome to Blog App"}))

module.exports = app
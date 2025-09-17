const dotenv = require("dotenv").config()
const express = require("express");
const nodemon = require("nodemon");

const app = require("./App.js")
const PORT = process.env.PORT;

app.listen(PORT || 3001,()=>{
  console.log(`Your server is running at http://localhost:${PORT}`)
})
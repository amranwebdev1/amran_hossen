const express = require("express")

const sendEmail = require("../controllers/sendMessage.controller.js")
const router = express.Router()
router.post("/",sendEmail)

module.exports = router
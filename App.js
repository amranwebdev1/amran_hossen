const express = require("express")
const userRouter = require("./routes/sendMessage.route.js")

const path = require("path");

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public","amran_portfolio")))

app.get("/",(req,res)=>{
  res.sendFile(__dirname + "/public/amran_portfolio/index.html")
})
app.use("/send_email",userRouter)

//error handaling
app.use((req,res,next)=>{
  res.status(404).json({message:"Route not found!"})
})
app.use((err,req,res,next)=>{
  res.status(500).json({message:"Something borke!"})
})
module.exports = app
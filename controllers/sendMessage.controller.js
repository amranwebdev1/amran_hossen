const dotenv = require("dotenv").config();
const nodemailer = require("nodemailer");

const sendEmail = async (req,res)=>{
  try{
    const {name,email,message} = req.body;
    const myemail = process.env.EMAIL;
    const mypass = process.env.PASS;
    
    const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,           // TLS (STARTTLS) ব্যবহার করবে
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS
    },
});
  const info = {
    from:myemail,
    to: myemail,
    subject:`html from theke pathano hoyeche ${name}`,
    text:`from:${email}\n ${message}`
  }
  await transporter.sendMail(info,(error,info)=>{
    if(error){
      console.log(error)
    }
    res.status(200).json({success:true,message:"Email send successfully!"})
  })
  }catch(error){
    console.log(error.message)
    res.status(400)
    console.log("email send faild")
  }
}
module.exports = sendEmail;
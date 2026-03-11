const express = require("express")
const fs = require("fs")
const path = require("path")

const app = express()

app.use(express.json())
app.use(express.static("public"))

const DB = "/tmp/messages.json"

if(!fs.existsSync(DB)){
 fs.writeFileSync(DB,"[]")
}

app.post("/api/contact",(req,res)=>{

 const {name,contact,message} = req.body

 if(!name || !contact || !message){
  return res.status(400).json({status:false})
 }

 const data = JSON.parse(fs.readFileSync(DB))

 data.push({
  id:Date.now(),
  name,
  contact,
  message
 })

 fs.writeFileSync(DB,JSON.stringify(data))

 res.json({status:true})
})

app.get("*",(req,res)=>{
 res.sendFile(path.join(__dirname,"public/index.html"))
})

module.exports = app

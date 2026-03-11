const express = require("express")
const fs = require("fs")
const path = require("path")

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.static("public"))

const DB = "./data/messages.json"

if(!fs.existsSync("./data")){
 fs.mkdirSync("./data")
}

if(!fs.existsSync(DB)){
 fs.writeFileSync(DB,"[]")
}

app.post("/api/contact",(req,res)=>{

 const {name,contact,message} = req.body

 if(!name || !contact || !message){
  return res.status(400).json({status:false,msg:"data kosong"})
 }

 const data = JSON.parse(fs.readFileSync(DB))

 const newMsg = {
  id: Date.now(),
  name,
  contact,
  message,
  date: new Date()
 }

 data.push(newMsg)

 fs.writeFileSync(DB,JSON.stringify(data,null,2))

 res.json({
  status:true,
  msg:"pesan terkirim"
 })
})

app.get("/api/contact",(req,res)=>{
 const data = JSON.parse(fs.readFileSync(DB))
 res.json(data)
})

app.get("*",(req,res)=>{
 res.sendFile(path.join(__dirname,"public/index.html"))
})

app.listen(PORT,()=>{
 console.log("server jalan di "+PORT)
})

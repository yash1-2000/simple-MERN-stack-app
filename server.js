const express = require("express")
const connectDB = require("./database/config")
const user = require("./database/model")

connectDB()

const app = express()
app.use(express.urlencoded({extended:false}));
app.use(express.json({extended:false}));

app.get("/api/users",async (req,res)=>{
    const users = await user.find()
    res.json({users:users})
})
app.post("/api/register",async (req,res)=>{
  try{
   await user.create({
        name : req.body.userName,
        email : req.body.userEmail
    })
    res.json({message:"user registered"})    
  }catch{
    res.json({message:"email already exists"})   
  }
// console.log(req.body)
// res.send("message received")
})

app.listen(5000,()=>{
    console.log("listining")
})
const express=require('express')
const cors=require('cors')
const http=require('http')

const app=express()
app.use(cors())
const mongoose=require('mongoose')



app.use(express.json())


const {Server}=require('socket.io')
const server=http.createServer(app)
const io=new Server(server,{
  cors:{
     origin:["http://localhost:5173"]
  
     
  },
})

























app.get('/',(req,res)=>{

  res.json('hi')})













app.listen(8080,()=>console.log('running'))









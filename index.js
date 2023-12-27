const express=require('express')
const cors=require('cors')
const http=require('http')

const app=express()
app.use(cors())
const mongoose=require('mongoose')



app.use(express.json())







































app.listen(8080,()=>console.log('running'))









const express=require('express')
const cors=require('cors')
const http=require('http')
const app=express()

app.use(express.json())
app.use(cors())
const mongoose=require('mongoose')








const userRouter=require('./Routes/userRoutes')





app.use('/api/auth',userRouter)


















































mongoose.set("strictQuery",false)
mongoose.connect('mongodb+srv://admin:12345@royoapi.3qmdrjq.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('database connected')
  app.listen(8080,()=>console.log('running'))
})

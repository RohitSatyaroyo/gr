const userModel=require('../MODELS/register')
const messageModel=require('../MODELS/message')
const getrec=async(req,res)=>{
    const ds=await userModel.find()
    res.json(ds)
}
const registeruser=async(req,res)=>{
    const {name,email,password}=req.body
    // const hashedpassword=await bcrypt.hash(password,10)
    const user=await userModel.create({name,email,password})
    res.json(user)

}
const authuser=async(req,res)=>{
    
    const user=await userModel.findOne(req.body)
    if(user){
       
      
        res.json({message:'s',userdetails:user})
        console.log(user)
      
        
    }
    else{
        res.json({message:'f'})
    }
}
const getAllUser=async(req,res)=>{
    const user=await userModel.find({_id:{$ne:req.params.id}}).select([
        "email", "name"
    ])
    res.json(user)

}


module.exports={getrec,registeruser,authuser,getAllUser}
    

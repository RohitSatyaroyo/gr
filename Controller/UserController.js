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


module.exports={getrec,registeruser}
    

const userModel=require('../MODELS/register')
const getrec=async(req,res)=>{
    const ds=await userModel.find()
    res.json(ds)
}


module.exports={getrec}
    

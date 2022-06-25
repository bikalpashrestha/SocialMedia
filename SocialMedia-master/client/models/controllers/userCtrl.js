const Users=require('../models/userModel')
 const userCtrl={
    searchUser:async(req,res)=>{

    },
    getUser:async(req,res)=>{
        try{
            const user=await Users,findBYId(reqparams.id).select('-password')
            if(user)return res.status(400).json({msg:"User doen not exist."})
            res.json({user})
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
        
    },
 }
 module.exports=userCtrl
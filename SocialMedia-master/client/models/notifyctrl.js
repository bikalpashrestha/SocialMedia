 const Notifies=require('../models/notifyModel')
 const notifyCtrl={
    createNotify:async(req,res)=>{
        try{
            const {id,recipients,url,text,content,image}=req.body
            const notify=new Notifies({
                id,recipients,url,text,content,image,user:req.user._id
            })
            await notify.save()
            return res.join({notify})
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
        
    }
 }
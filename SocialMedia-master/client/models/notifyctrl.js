 const Notifies=require('../models/notifyModel')
 const notifyCtrl={
    createNotify:async(req,res)=>{
        try{
            const {id,recipients,url,text,content,image}=req.body
            const notify=new Notifies({
                id,recipients,url,text,content,image,user:req.user._id
            })
        }
    }
 }
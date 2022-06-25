const mongoose=require('mongoose')
const notifySchema=new momgoose.notifySchema({
    id:mongoose.Types.ObjectId,
    user:{type:mongoose.Types.ObjectId,ref:'user'},
    recipents:{mongoose.Types.ObjectId},
    url:String,
    text:String,
    content:String,
    image:String,
    isRead:{type:Boolean,default:false}
},{
    timestamps:true
})
module.exports=module.model('notify',notifySchema)
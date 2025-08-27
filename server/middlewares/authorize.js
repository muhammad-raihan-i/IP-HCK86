const {House}=require("../models")
async function authorize(req,res,next){
    try{
        console.log("try@authorize")
        console.log("assume req.user exists")
        
        let data=await House.findOne({where:{id:req.params.id}})
        console.log("check item existence")
        if(!data){
            throw {name:"NotFound",message:"Data not found"}
        }
        console.log("check item ownership")
        if(data.OwnerId!==req.user.id){
            throw {name:"Forbidden",message:"You are not authorized"}
        }
        console.log("authorize done")
        next()
        //see also:
        //  "../routes/index.js"
        
    }catch(error){
        console.log("error@authorize")
        console.log(error)
        next(error)
    }
}
module.exports=authorize
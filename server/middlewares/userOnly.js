const {User}=require("../models")
async function userOnly(req, res, next) {
    try{
        const user=await User.findByPk(req.params.id)
        if(!user){
            throw {name:"NotFound"}
        }
        if(user.id !== req.user.id){
            throw {name:"Forbidden"}
        }
        next()              
    }catch(error){
        next(error)
    }
}
module.exports=userOnly

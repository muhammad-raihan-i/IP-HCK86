const {User,House}=require("../models")
async function ownerOnly(req, res, next) {
    try{
        const house=await House.findByPk(req.params.id)
        if(!house){
            throw {name:"NotFound"}
        }
        if(house.ownerId !== req.user.id){
            throw {name:"Forbidden"}
        }
        next()              
    }catch(error){
        next(error)
    }
}
module.exports=ownerOnly

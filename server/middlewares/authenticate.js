const {verify}=require("../helpers/jwt.js")
function authenticate(req, res, next) {
    try{
        const token=req.headers.authorization?.split(" ")[1]
        if(!token) throw {name:"Unauthorized"}
        const decoded=verify(token)
        req.user=decoded
        next()
    }catch(error){
        next(error)
    }
}
module.exports=authenticate
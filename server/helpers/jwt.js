require("dotenv").config()
const jwt=require("jsonwebtoken")
const secret=process.env.JWT_SECRET
function sign(object){
    return jwt.sign(object,secret)
}
function verify(token){
    return jwt.verify(token,secret)
}
module.exports={sign,verify}

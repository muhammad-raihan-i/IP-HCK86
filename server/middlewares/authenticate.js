const {verify}=require("../helpers/jwt.js")
async function authenticate(req,res,next){
    try{
        console.log("try@authenticate")
        //authenticate: verify jwt
        let token=req.headers.authorization
        console.log("check if token exists")
        if(!token){
            throw {name:"Unauthorized",message:"Invalid token"}
        }
        let token2=token.split(" ")
        console.log("check if Bearer")
        if(token2[0]!=="Bearer"){
            throw {name:"Unauthorized",message:"Invalid token"}
        }
        console.log("check if User")
        let user=verify(token2[1])
        if(!user){
            throw {name:"Unauthorized",message:"Invalid token"}
        }
        console.log("assign req.user")
        req.user=user
        console.log("authenticate done")
        next()
    }catch(error){
        console.log("error@authenticate")
        console.log(error)
        next(error)
    }
}
module.exports=authenticate
function errorHandler(err,req,res,next){
    console.log("errorHandler.js")
    let message="Internal server error"
    let status=500
    switch(err.name){
        case "BadRequest":
            status=400
            message=err.message
            break
        case "SequelizeValidationError":
            status=400
            message=err.errors[0].message
            break
        case "SequelizeUniqueConstraintError":
            status=400
            message="Email must be unique"
            break
        case "JsonWebTokenError":
            status=401
            message="Invalid token"
            break
        case "Unauthorized":
            status=401
            message=err.message
            break
        case "Forbidden":
            status=403
            message=err.message
            break
        case "NotFound":
            status=404
            message=err.message
            break
        default:
            break
    }
    console.log("status:",status)
    console.log("message:",message)
    console.log("[FINISHED] at",new Date(),"\n")
    res.status(status).json(message)
}
module.exports=errorHandler
function errorHandler(err, req, res, next) {
    console.log("error handler")
    console.log(err)
    let status=500
    let message='Internal Server Error'
    switch (err.name) {
        case "SequelizeUniqueConstraintError":
            status = 400
            message = "Email is already in use"
            break
        case "SequelizeValidationError":
            status = 400
            message = err.errors.map(e => e.message).join(", ")
            break
        case 'BadRequest':
            status = 400
            message = err.message
            break
        case 'Unauthorized':
            status = 401
            message = err.message
            break
        case 'NotFound':
            status = 404
            message = err.message
            break
    }
    res.status(status).json({ name:err.name,message })
}
module.exports=errorHandler
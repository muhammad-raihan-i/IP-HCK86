console.log("@userController.js")
console.log("Load model: User")
const {User}=require("../models")
console.log("Load bcrypt: compare")
const {compare}=require("../helpers/bcrypt.js")
console.log("Load jwt: sign")
const {sign}=require("../helpers/jwt.js")
/*
touch ./helpers/bcrypt.js
touch ./helpers/jwt.js
*/
class UserController {
    static async login(req, res, next) {
        try {
            console.log("try@UserController/login")
            console.log("req.body.email:",req.body.email)
            console.log("req.body.password:",req.body.password)
            let data = await User.findOne({ where: {email: req.body.email } })
            if(!data){
                console.log("result: no data")
                throw {name:"Unauthorized",message:"Invalid email/password"}
            }
            if(!compare(req.body.password,data.password)){
                throw {name:"Unauthorized",message:"Invalid email/password"}
            }
            let data2={
                id:data.id,
                email:data.email
            }
            let token=sign(data2)
            res.status(200).json({token:token})
        } catch (error) {
            console.log("error@UserController/login")
            console.log(error)
            next(error)
        }
    }
    static async register(req, res, next) {
        try {
            console.log("try@UserController/register")
            console.log("req.body:",req.body)
            let data=await User.create(req.body)
            let data2={
                id:data.id,
                email:data.email
            }
            console.log("data2")
            console.log(data2)
            res.status(201).json(data2)
        } catch (error) {
            console.log("error@UserController/register")
            console.log(error)
            next(error)
        }
    }
}
module.exports = UserController
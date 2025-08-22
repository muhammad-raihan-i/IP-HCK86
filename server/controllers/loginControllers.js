const {compare}=require("../helpers/bcrypt.js")
const {sign}= require("../helpers/jwt.js")
const {User} = require("../models")
class LoginController {
    static async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ where: { email } });
            if (!user || !compare(password, user.password)) {
                throw { name: "BadRequest" , message:"Invalid email or password"};
            }
            user.password=undefined
            const token=sign({
                id: user.id,
                email: user.email,
            })
            res.json({user, token})
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
    static async register(req,res,next){
        try{
            const { email, password } = req.body;
            const newUser = await User.create({ email, password });
            newUser.password = undefined;
            res.status(201).json(newUser);
        }catch(error){
            console.log(error);
            next(error);
        }
    }
}
module.exports = LoginController;
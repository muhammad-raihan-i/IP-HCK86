const {User} = require("../models")
class LoginController {
    static async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ where: { email } });
            if (!user || user.password !== password) {
                throw { name: "BadRequest" , message:"Invalid email or password"};
            }
        } catch (error) {
            console.error(error);
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
            console.error(error);
            next(error);
        }
    }
}
module.exports = LoginController;
const { User } = require("../models");
const {compare} = require("../helpers/bcrypt")
const { sign } = require("../helpers/jwt");
class LoginController{
    static async login(req, res, next){
        console.log("login")
        const { email, password } = req.body;
        let object2={}
        try{
            const user = await User.findOne({ where: { email } });
            if (!user) {
                throw { name: 'BadRequest', message: 'Invalid email/password' };
            }
            const isValidPassword = compare(password,user.password);
            if (!isValidPassword) {
                throw { name: 'BadRequest', message: 'Invalid email/password' };
            }
            object2={
                id: user.id,
                email,
            }
            const token = sign(object2);
            res.status(200).json({ token });
        }catch(error){
            console.log("error at loginController");
            console.log(error)
            next(error);
        }
    }
}

module.exports=LoginController
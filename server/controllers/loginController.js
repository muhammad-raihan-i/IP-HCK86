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
                email: user.email,
            }
            const token = sign(object2);
            res.status(200).json({ token });
        }catch(error){
            console.log("error at loginController/login");
            console.log(error)
            next(error);
        }
    }
    static async registerRentee(req, res, next) {
        let {
            email,
            password,
            role,
            fullName,
            imgUrl,
            bio,
            birthDate,
            gender,
            job,
            homeAddress,
            officeAddress,
            officeLat,
            officeLong,
            lowestBudget,
            highestBudget,
            isRenting
        } = req.body;
        role = 'rentee';
        isRenting = false;
        try{
            const user = await User.create({
                email,
                password,
                role,
                fullName,
                imgUrl,
                bio,
                birthDate,
                gender,
                job,
                homeAddress,
                officeAddress,
                officeLat,
                officeLong,
                lowestBudget,
                highestBudget,
                isRenting
            });
            delete user.password
            res.status(201).json({ data:user });
        }catch(error){
            console.log("error at loginController/registerRentee");
            console.log(error)
            next(error);
        }
    }
    static async registerOwner(req, res, next) {
        let {
            email,
            password,
            role,
            fullName,
            imgUrl,
            bio,
            birthDate,
            gender,
            job,
            homeAddress,
            officeAddress,
            officeLat,
            officeLong,
            lowestBudget,
            highestBudget,
            isRenting
        } = req.body;
        role = 'owner';
        isRenting = false;
        try{
            const user = await User.create({
                email,
                password,
                role,
                fullName,
                imgUrl,
                bio,
                birthDate,
                gender,
                job,
                homeAddress,
                officeAddress,
                officeLat,
                officeLong,
                lowestBudget,
                highestBudget,
                isRenting
            });
            delete user.password
            res.status(201).json({ data:user });
        }catch(error){
            console.log("error at loginController/registerOwner");
            console.log(error)
            next(error);
        }
    }
}

module.exports = LoginController;
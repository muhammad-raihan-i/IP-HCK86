const {User} = require("../models")
class UserController{
    //1
    static async findAll(req, res,next) {
        try {
            const users = await User.findAll({attributes:{exclude:["password"]}});
            res.json(users);
        } catch (error) {
            console.error(error);
            next(error)
        }
    }
    //2
    static async findOne(req, res,next) {
        try {
            const user = await User.findByPk(req.params.id);
            if (!user) {
                throw {name:"NotFound"}
            }
            user.password=undefined
            res.json(user);
        } catch (error) {
            console.error(error);
            next(error)
        }
    }
    //4
    static async update(req, res,next) {
        try {
            const { email, password } = req.body;
            const user = await User.findByPk(req.params.id);
            if (!user) {
                throw {name:"NotFound"}
            }
            user.email = email;
            user.password = password;
            res.json(user);
        } catch (error) {
            console.error(error);
            next(error);
        }
    }
    //5
    static async delete(req, res,next) {
        try {
            const user = await User.findByPk(req.params.id);
            if (!user) {
                throw {name:"NotFound"}
            }
            await user.destroy();
            res.status(204).send();
        } catch (error) {
            console.error(error);
            next(error);
        }
    }
}
module.exports = UserController;
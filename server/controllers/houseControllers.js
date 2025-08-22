const {House} = require("../models")
class HouseController{
    //1
    static async findAll(req, res,next) {
        try {
            const houses = await House.findAll();
            res.json(houses);
        } catch (error) {
            console.error(error);
            next(error)
        }
    }
    //2
    static async findOne(req, res,next) {
        try {
            const house = await House.findByPk(req.params.id);
            if (!house) {
                throw {name:"NotFound"}
            }
            res.json(house);
        } catch (error) {
            console.error(error);
            next(error)
        }
    }
    //3
    static async create(req, res,next) {
        try {
            const { address, price } = req.body;
            const { userId } = req.params;
            const newHouse = await House.create({ address, price, userId });
            res.status(201).json(newHouse);
        } catch (error) {
            console.error(error);
            next(error);
        }
    }
    //4
    static async update(req, res,next) {
        try {
            const { address, price } = req.body;
            const { userId } = req.params;
            const house = await House.findByPk(req.params.id);
            if (!house) {
                throw {name:"NotFound"}
            }
            house.address = address;
            house.price = price;
            await House.update(house)
            res.json(house);
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
module.exports = HouseController;
console.log("@houseController.js")
console.log("Load model: House")
const {User,House}=require("../models")
class HouseController{
    static async create(req,res,next){//authentication required
        try{
            console.log("try@HouseController/create")
            console.log("assume req.user.id exists")
            console.log("let data=await User.create(req.body)")
            let object={
                ...req.body,
                OwnerId:req.user.id
            }
            let data=await House.create(object)
            console.log("[FINISHED] at",new Date(),"\n")
            res.status(201).json(data)
        }catch(error){
            console.log("error@HouseController/create")
            console.log(error)
            next(error)
        }
    }
    static async findOne(req,res,next){
        try{
            console.log("try@HouseController/findOne")
            console.log("check if req.params.id exists")
            let data=await House.findOne({
                where:{id:req.params.id},
                include:[{
                    model:User,
                    attributes:{exclude:["password"]}
                }]
            })
            if(!data){
                throw {name:"NotFound",message:"Data not found"}
            }
            console.log("[FINISHED] at",new Date(),"\n")
            res.status(200).json(data)
        }catch(error){
            console.log("error@HouseController/findOne")
            console.log(error)
            next(error)
        }
    }
    static async findAll(req,res,next){
        try{
            console.log("try@HouseController/findAll")
            let data=await House.findAll()
            console.log("[FINISHED] at",new Date(),"\n")
            res.status(200).json(data)
        }catch(error){
            console.log("error@HouseController/findAll")
            console.log(error)
            next(error)
        }
    }
    static async update(req,res,next){//authorized
        try{
            //name:string,address:text,imageUrl:text,available:boolean,OwnerId:integer
            console.log("try@HouseController/update")
            console.log("assume req.user.id matches data.OwnerId")
            console.log("assume req.params.id exists")
            let data={
                name:req.body.name,
                address:req.body.address,
                imageUrl:req.body.imageUrl,
                available:req.body.available,
                OwnerId:req.user.id
            }
            await House.update(data,{where:{id:req.params.id}})
            data.id=req.params.id
            console.log("[FINISHED] at",new Date(),"\n")
            res.status(200).json(data)
        }catch(error){
            console.log("error@HouseController/findAll")
            console.log(error)
            next(error)
        }
    }
    static async delete(req,res,next){//authorized
        try{
            //name:string,address:text,imageUrl:text,available:boolean,OwnerId:integer
            console.log("try@HouseController/delete")
            console.log("assume req.params.id exists")
            await House.destroy({where:{id:req.params.id}})
            console.log("[FINISHED] at",new Date(),"\n")
            res.status(200).json({message:"Delete successful"})
        }catch(error){
            console.log("error@HouseController/delete")
            console.log(error)
            next(error)
        }
    }
}
module.exports=HouseController
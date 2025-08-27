const express=require("express")
const routes=express()
const UserController=require("../controllers/userController.js")
const HouseController=require("../controllers/houseController.js")
const GeminiController=require("../controllers/geminiController.js")
const authenticate=require("../middlewares/authenticate.js")
const authorize=require("../middlewares/authorize.js")
const errorHandler=require("../middlewares/errorHandler.js")
/*
mkdir controllers
mkdir middlewares
touch middlewares/authenticate.js
touch middlewares/authorize.js
touch middlewares/errorHandler.js
touch controllers/userController.js
touch controllers/houseController.js
*/
routes.post("/login",UserController.login)
routes.post("/register",UserController.register)
routes.use(authenticate)
routes.get("/houses",HouseController.findAll)
routes.post("/gemini",GeminiController.gemini)
routes.post("/houses/create",HouseController.create)//must login
routes.put("/houses/update/:id",authorize,HouseController.update)//owner only
routes.delete("/houses/delete/:id",authorize,HouseController.delete)//owner only
routes.get("/houses/:id",HouseController.findOne)
routes.use(errorHandler)
module.exports=routes
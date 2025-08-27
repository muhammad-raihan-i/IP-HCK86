const gemini=require("../helpers/gemini.js")
class GeminiController{
    static async gemini(req,res,next){
        try{
            console.log("try@GeminiController/gemini")
            let data=await gemini(req.body.prompt)
            res.status(200).json({message:data})
        }catch(error){
            console.log("error@GeminiController/gemini")
            console.log(error)
            next(error)
        }
    }
}
module.exports=GeminiController
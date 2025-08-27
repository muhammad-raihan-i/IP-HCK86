const bcrypt=require("bcryptjs")
function hash(pass){
    return bcrypt.hashSync(pass,10)
}
function compare(pass,dbPass){
    return bcrypt.compareSync(pass,dbPass)
}
module.exports={hash,compare}

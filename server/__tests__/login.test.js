const {describe,test,beforeAll,afterAll,expect}=require("@jest/globals")
const app=require("../app.js")
const {User} = require("../models")
const sequelize=require(sequelize)
const {queryInterface}=sequelize()
const request=require("supertest")

afterAll(//delete table
    async ()=>{
        await queryInterface.bulkDelete('User', null, {})
    },//function
    666666//timeout
)
test(
    "register",//title
    function f1(){
        request(app)
            .post("/login")
    },//function
    2000//timeout
)
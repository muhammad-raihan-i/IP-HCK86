const {describe,test,beforeAll,afterAll,expect}=require("@jest/globals")
const app=require("../app.js")
const {sign,verify}=require("../helpers/jwt.js")
const {User,sequelize} = require("../models/index.js")
const {queryInterface}=sequelize

const request=require("supertest")
let token=""
const user1 = {
  email: "user.test@mail.com",
  password: "usertest",
};
beforeAll(
    async function up(){
        let data=await User.create(user1)
        let data2={}
        data2.id=data.id
        data2.email=data.email
        token=sign(data2)
    },//function
    1000//timeout
)
afterAll(
    async function down(){
        await queryInterface.bulkDelete("Users",null) 
    },//function
    1000//timeout
)

test(
    "1. gemini",//title
    async function register(){
        await request(app)
            .post("/gemini")
            .set({authorization:"Bearer "+token})
            .send({prompt:"jaksel"})
            .expect(200)
            .then(response => {
                expect(!!response.body.message).toEqual(true)
                expect(typeof response.body.message).toEqual("string")
            });
    },//function
    60000//time limit
)
test(
    "2. gemini no prompt",//title
    async function register(){
        await request(app)
            .post("/gemini")
            .set({authorization:"Bearer "+token})
            .send({prompt:""})
            .expect(400)
            .then(response => {
                expect(response.body.message).toEqual("Prompt required")
            });
    },//function
    2000//time limit
)
test(
    "3. gemini no login",//title
    async function register(){
        await request(app)
            .post("/gemini")
            .send({prompt:""})
            .expect(401)
            .then(response => {
                expect(response.body.message).toEqual("Invalid token")
            });
    },//function
    2000//time limit
)
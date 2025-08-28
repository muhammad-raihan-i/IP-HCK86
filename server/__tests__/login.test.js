const {describe,test,beforeAll,afterAll,expect}=require("@jest/globals")
const app=require("../app.js")
const {User,sequelize} = require("../models/index.js")
const {queryInterface}=sequelize
const request=require("supertest")

const user1 = {
  email: "user.test@mail.com",
  password: "usertest",
};
beforeAll(
    async function down(){
        await queryInterface.bulkDelete("Users",null)
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
    "1. register",//title
    async function register(){
        await request(app)
            .post("/register")
            .send(user1)
            .expect(201)
            .then(response => {
                expect(response.body.email).toEqual(user1.email)
            });
    },//function
    1000//time limit
)
test(
    "2. register duplicate",//title
    async function register(){
        await request(app)
            .post("/register")
            .send(user1)
            .expect(400)
            .then(response => {
                expect(response.body.message).toEqual("Email must be unique")
            })
    },//function
    1000//time limit
)
test(
    "3. register empty",//title
    async function register(){
        await request(app)
            .post("/register")
            .send({})
            .expect(400)
            .then(response => {
                expect(response.body.message).toEqual("Email required")
            })
    },//function
    1000//time limit
)
test(
    "4. register no password",//title
    async function register(){
        await request(app)
            .post("/register")
            .send({email:"raihan@raihan.com"})
            .expect(400)
            .then(response => {
                expect(response.body.message).toEqual("Password required")
            })
    },//function
    1000//time limit
)
test(
    "5. login",//title
    async function register(){
        await request(app)
            .post("/login")
            .send(user1)
            .expect(200)
            .then(response => {
                expect(typeof response.body.token).toEqual("string")
            })
    },//function
    1000//time limit
)
test(
    "6. login wrong email",//title
    async function register(){
        await request(app)
            .post("/login")
            .send({email:"abc@def.com",password:"123123"})
            .expect(401)
            .then(response => {
                expect(response.body.message).toEqual("Invalid email/password")
            })
    },//function
    1000//time limit
)
test(
    "7. login wrong password",//title
    async function register(){
        await request(app)
            .post("/login")
            .send({email:"user.test@mail.com",password:"123123"})
            .expect(401)
            .then(response => {
                expect(response.body.message).toEqual("Invalid email/password")
            })
    },//function
    1000//time limit
)
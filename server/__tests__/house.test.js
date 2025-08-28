const {describe,test,beforeAll,afterAll,expect}=require("@jest/globals")
const app=require("../app.js")
const {sign,verify}=require("../helpers/jwt.js")
const {User,House,sequelize} = require("../models")
const {queryInterface}=sequelize

const request=require("supertest")
let token=""
let userId=0
let existingId=0
const user1 = {
  email: "user.test@mail.com",
  password: "usertest",
};
const house1={
    name:"user1's house",
    address:"jln abc no. 123",
    imageUrl:"example.com/123",
    available:true,
}
const house2={
    name:"user1's house 2",
    address:"jln abc no. 124",
    imageUrl:"example.com/124",
    available:true,
}
beforeAll(
    async function up(){
        let data=await User.create(user1)
        let data2={}
        data2.id=data.id
        userId=data2.id
        data2.email=data.email
        token=sign(data2)
        house1.OwnerId=data2.id
        let data3=await House.create(house1)
        house2.OwnerId=data2.id
        await House.create(house2)
        existingId=data3.id
    },//function
    1000//timeout
)
afterAll(
    async function down(){
        token=""
        await queryInterface.bulkDelete("Houses",null) 
        await queryInterface.bulkDelete("Users",null) 
    },//function
    1000//timeout
)
// routes.get("/houses",HouseController.findAll)
// routes.post("/houses/create",HouseController.create)//must login
// routes.put("/houses/update/:id",authorize,HouseController.update)//owner only
// routes.delete("/houses/delete/:id",authorize,HouseController.delete)//owner only
// routes.get("/houses/:id",HouseController.findOne)
test(
    "1. houses/findAll",//title
    async ()=>{
        await request(app)
            .get("/houses")
            .set({authorization:"Bearer "+token})
            .expect(200)
            .then(response => {
                expect(response.body.length).toEqual(2)
            });
    },//function
    60000//time limit
)
test(
    "2. houses/findAll no login",//title
    async ()=>{
        await request(app)
            .get("/houses")
            .set({authorization:""})
            .expect(401)
            .then(response => {
                expect(response.body.message).toEqual("Invalid token")
            });
    },//function
    60000//time limit
)
test(
    "3. houses/findOne",//title
    async ()=>{
        await request(app)
            .get("/houses/"+existingId)
            .set({authorization:"Bearer "+token})
            .expect(200)
            .then(response => {
                console.log("response.body:",response.body)
                expect(response.body.name).toEqual(house1.name)
                expect(response.body.address).toEqual(house1.address)
                expect(response.body.imageUrl).toEqual(house1.imageUrl)
                expect(response.body.available).toEqual(house1.available)
            });
    },//function
    60000//time limit
)
test(
    "4. houses/findOne no login",//title
    async ()=>{
        await request(app)
            .get("/houses/"+existingId)
            .set({authorization:""})
            .expect(401)
            .then(response => {
                expect(response.body.message).toEqual("Invalid token")
            });
    },//function
    60000//time limit
)

test(
    "5. houses/findOne no data",//title
    async ()=>{
        await request(app)
            .get("/houses/"+(existingId+666))
            .set({authorization:"Bearer "+token})
            .expect(404)
            .then(response => {
                expect(response.body.message).toEqual("Data not found")
            });
    },//function
    60000//time limit
)

test(
    "6. houses/create",//title
    async ()=>{
        await request(app)
            .post("/houses/create")
            .set({authorization:"Bearer "+token})
            .send(house1)
            .expect(201)
            .then(response => {
                expect(response.body.id).toEqual(existingId+2)
                expect(response.body.name).toEqual(house1.name)
                expect(response.body.address).toEqual(house1.address)
                expect(response.body.imageUrl).toEqual(house1.imageUrl)
            });
    },//function
    60000//time limit
)
test(
    "7. houses/create no login",//title
    async ()=>{
        await request(app)
            .post("/houses/create")
            .set({authorization:""})
            .send(house1)
            .expect(401)
            .then(response => {
                expect(response.body.message).toEqual("Invalid token")
            });
    },//function
    60000//time limit
)
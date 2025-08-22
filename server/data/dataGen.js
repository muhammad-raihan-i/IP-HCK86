function makeUser(id){
    return {
        id: id,
        email: `user${id}@example.com`,
        password: `password${id}`
    };
}
function makeHouse(ownerId,id){
    return {
        id: id,
        address: `House ${id} Address`,
        imgUrl: `http://example.com/house${id}.jpg`,
        UserId: ownerId
    };
}
const fs=require("fs").promises
async function dataGenUsers(count){
    const users=[]
    for(let i=1;i<=count;i++){
        users.push(makeUser(i))
    }
    await fs.writeFile("./data/dummy_users.json",JSON.stringify(users,null,2))
}
async function dataGenHouses(count){
    const houses=[]
    for(let i=1;i<=count;i++){
        houses.push(makeHouse(i%10,i))
    }
    await fs.writeFile("./data/dummy_houses.json",JSON.stringify(houses,null,2))
}
dataGenUsers(100)
dataGenHouses(100)
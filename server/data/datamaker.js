const fs=require("fs").promises

async function makeUsers(){
    let users=[]
    for(let i=0;i<100;i++){
        users.push({
            email: `user${i}@example.com`,
            password: `hashedpassword${i}`,
            role: i === 0 ? 'admin' : 'user',
            fullName: `User ${i}`,
            imgUrl: `https://example.com/user${i}.jpg`,
            bio: `Bio for user ${i}.`,
            birthDate: `1990-01-0${i % 30 + 1}`,
            gender: i % 2 === 0 ? 'male' : 'female',
            job: i % 2 === 0 ? 'Engineer' : 'Designer',
            homeAddress: `${i} Main St`,
            officeAddress: `${i} Office Rd`,
            officeLat: -6.200000 + i * 0.01,
            officeLong: 106.816666 + i * 0.01,
            lowestBudget: 1000000 + i * 100000,
            highestBudget: 3000000 + i * 100000,
            isRenting: false
        })
    }
    await fs.writeFile("./data/dummy_users.json", JSON.stringify(users, null, 2))
}

makeUsers()
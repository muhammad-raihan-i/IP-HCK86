'use strict';
const fs=require("fs").promises
const {hash}=require("../helpers/bcrypt.js")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let data=await fs.readFile("./data/dummy_users.json")
    data=JSON.parse(data)
    data=data.map(user=>({
      email: user.email,
      password: hash(user.password),
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('Users', data)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};

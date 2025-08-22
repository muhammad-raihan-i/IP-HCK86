'use strict';
const fs=require("fs").promises
const {hash}=require("../helpers/bcrypt.js")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let data=await fs.readFile("./data/dummy_houses.json")
    data=JSON.parse(data)
    data=data.map(house=>({
      ...house,
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId:house.UserId+1
    }))
    await queryInterface.bulkInsert('Houses', data)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Houses', null, {});
  }
};


'use strict';
const {hash}=require("../helpers/bcrypt")
/** @type {import('sequelize-cli').Migration} */
module.exports = {

  async up (queryInterface, Sequelize) {
  const users = require('../data/dummy_users.json');
    const now = new Date();
    users.forEach(u => {
      u.password = hash(u.password);
      u.createdAt = now;
      u.updatedAt = now;
    });
    await queryInterface.bulkInsert('Users', users, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};

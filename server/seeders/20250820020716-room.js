'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  const rooms = require('../data/dummy_rooms.json');
    const now = new Date();
    rooms.forEach(r => {
      r.createdAt = now;
      r.updatedAt = now;
    });
    await queryInterface.bulkInsert('Rooms', rooms, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Rooms', null, {});
  }
};

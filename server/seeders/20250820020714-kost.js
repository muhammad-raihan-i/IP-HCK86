'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  const kosts = require('../data/dummy_kosts.json');
    const now = new Date();
    kosts.forEach(k => {
      k.createdAt = now;
      k.updatedAt = now;
    });
    await queryInterface.bulkInsert('Kosts', kosts, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Kosts', null, {});
  }
};

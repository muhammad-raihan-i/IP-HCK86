'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      fullName: {
        type: Sequelize.STRING
      },
      imgUrl: {
        type: Sequelize.STRING
      },
      bio: {
        type: Sequelize.TEXT
      },
      birthDate: {
        type: Sequelize.DATE
      },
      gender: {
        type: Sequelize.STRING
      },
      job: {
        type: Sequelize.STRING
      },
      homeAddress: {
        type: Sequelize.TEXT
      },
      officeAddress: {
        type: Sequelize.TEXT
      },
      officeLat: {
        type: Sequelize.FLOAT
      },
      officeLong: {
        type: Sequelize.FLOAT
      },
      lowestBudget: {
        type: Sequelize.INTEGER
      },
      highestBudget: {
        type: Sequelize.INTEGER
      },
      isRenting: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
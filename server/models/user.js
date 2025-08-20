'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    fullName: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    bio: DataTypes.TEXT,
    birthDate: DataTypes.DATE,
    gender: DataTypes.STRING,
    job: DataTypes.STRING,
    homeAddress: DataTypes.TEXT,
    officeAddress: DataTypes.TEXT,
    officeLat: DataTypes.FLOAT,
    officeLong: DataTypes.FLOAT,
    lowestBudget: DataTypes.INTEGER,
    highestBudget: DataTypes.INTEGER,
    isRenting: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
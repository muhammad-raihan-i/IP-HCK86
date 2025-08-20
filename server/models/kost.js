'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Kost.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    imgUrl: DataTypes.STRING,
    address: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    long: DataTypes.FLOAT,
    OwnerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Kost',
  });
  return Kost;
};
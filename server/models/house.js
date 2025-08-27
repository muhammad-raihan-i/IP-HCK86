'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class House extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      House.belongsTo(models.User,{foreignKey:"OwnerId"})
    }
  }
  House.init({
    name: DataTypes.STRING,
    address: DataTypes.TEXT,
    imageUrl: DataTypes.TEXT,
    available: {
      type:DataTypes.BOOLEAN,
      defaultValue:true
    },
    OwnerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'House',
  });
  return House;
};
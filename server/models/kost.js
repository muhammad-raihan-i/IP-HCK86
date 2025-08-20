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
      Kost.hasMany(models.Room, { foreignKey: 'KostId' });
      Kost.belongsTo(models.User, { foreignKey: 'OwnerId', as: 'Owner' });
    }
  }
  Kost.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Kost name is required' },
        notEmpty: { msg: 'Kost name is required' }
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: { msg: 'Description is required' },
        notEmpty: { msg: 'Description is required' }
      }
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Image URL is required' },
        notEmpty: { msg: 'Image URL is required' }
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Address is required' },
        notEmpty: { msg: 'Address is required' }
      }
    },
    lat: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notNull: { msg: 'Latitude is required' },
        notEmpty: { msg: 'Latitude is required' }
      }
    },
    long: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notNull: { msg: 'Longitude is required' },
        notEmpty: { msg: 'Longitude is required' }
      }
    },
    OwnerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'OwnerId is required' },
        notEmpty: { msg: 'OwnerId is required' }
      }
    }
  }, {
    sequelize,
    modelName: 'Kost',
  });
  return Kost;
};
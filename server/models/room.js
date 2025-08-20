'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Room.belongsTo(models.Kost, { foreignKey: 'KostId' });
      Room.hasMany(models.Transaction, { foreignKey: 'RoomId' });
    }
  }
  Room.init({
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'Room number is required' },
        notEmpty: { msg: 'Room number is required' }
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
    size: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'Room size is required' },
        notEmpty: { msg: 'Room size is required' }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'Room price is required' },
        notEmpty: { msg: 'Room price is required' },
        min: {
          args: 1000,
          msg: 'Room price must be at least 1000'
        }
      }
    },
    isRented: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notNull: { msg: 'isRented is required' },
        notEmpty: { msg: 'isRented is required' }
      }
    },
    KostId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'KostId is required' },
        notEmpty: { msg: 'KostId is required' }
      }
    }
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};
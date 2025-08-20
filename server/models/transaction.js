'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transaction.belongsTo(models.Room, { foreignKey: 'RoomId' });
      Transaction.belongsTo(models.User, { foreignKey: 'RenteeId', as: 'Rentee' });
    }
  }
  Transaction.init({
    isRunning: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      validate: {
        notNull: {
          msg: 'isRunning is required'
        },
        notEmpty: {
          msg: 'isRunning is required'
        }
      }
    },
    RoomId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'RoomId is required'
        },
        notEmpty: {
          msg: 'RoomId is required'
        }
      }
    },
    RenteeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'RenteeId is required'
        },
        notEmpty: {
          msg: 'RenteeId is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};
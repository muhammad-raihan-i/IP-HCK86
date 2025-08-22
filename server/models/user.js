'use strict';
const {hash}=require("../helpers/bcrypt.js")
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
      User.hasMany(models.House,{ foreignKey: 'UserId' })
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        isEmail: {
          msg: "Invalid email format"
        },
        notNull:{
          msg: "Email is required"
        },
        notEmpty:{
          msg: "Email is required"
        },
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull:{
          msg: "Password is required"
        },
        notEmpty:{
          msg: "Password is required"
        }
      }
    }
  }, {
    hooks:{
      beforeCreate: (user) => {
        user.password = hash(user.password);
      },
      beforeUpdate: (user) => {
        user.password = hash(user.password);
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};
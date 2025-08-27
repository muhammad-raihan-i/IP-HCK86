'use strict';
const {hash}=require("../helpers/bcrypt")
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
      User.hasMany(models.House,{foreignKey:"OwnerId"})
    }
  }
  User.init({
    email: {
      type:DataTypes.STRING,
      unique:true,
      allowNull:false,
      validate:{
        notNull:{
          msg:"Email required"
        },
        notEmpty:{
          msg:"Email required"
        },
        isEmail:{
          msg:"Email invalid"
        }
      }
    },
    password: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:"Password required"
        },
        notEmpty:{
          msg:"Password required"
        },
      }
    },
  }, {
    hooks:{
      beforeCreate:(user,options)=>{
        user.password=hash(user.password)
      },
      beforeUpdate:(user,options)=>{
        user.password=hash(user.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};
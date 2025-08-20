'use strict';
const { hash } = require('../helpers/bcrypt');
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
      User.hasMany(models.Kost, { foreignKey: 'OwnerId', as: 'Kosts' });
      User.hasMany(models.Transaction, { foreignKey: 'RenteeId', as: 'Transactions' });
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'Email must be unique'
      },
      validate: {
        notNull: {
          msg: 'Email is required'
        },
        isEmail: {
          msg: 'Email must be valid'
        },
        notEmpty: {
          msg: 'Email is required'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Password is required'
        },
        notEmpty: {
          msg: 'Password is required'
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Role is required'
        },
        notEmpty: {
          msg: 'Role is required'
        },
        isIn: {
          args: [['rentee', 'owner']],
          msg: 'Role must be either rentee or owner'
        }
      }
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Full name is required'
        },
        notEmpty: {
          msg: 'Full name is required'
        }
      }
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Image URL is required'
        },
        notEmpty: {
          msg: 'Image URL is required'
        }
      }
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Bio is required'
        },
        notEmpty: {
          msg: 'Bio is required'
        }
  // No age validation here, but the user's request seems to refer to birthDate, not bio. Implementing on birthDate field below.
      }
    },
    birthDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Birth date is required'
        },
        notEmpty: {
          msg: 'Birth date is required'
        }
        ,
        isOldEnough(value) {
          if (!value) return;
          const now = new Date();
          const birth = new Date(value);
          const minAge = 11 + 11/12; // 11 years 11 months
          const age = (now - birth) / (1000 * 60 * 60 * 24 * 365.25);
          if (age < minAge) {
            throw new Error('User must be at least 11 years and 11 months old');
          }
        }
      }
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Gender is required'
        },
        notEmpty: {
          msg: 'Gender is required'
        }
      }
    },
    job: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Job is required'
        },
        notEmpty: {
          msg: 'Job is required'
        }
      }
    },
    homeAddress: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Home address is required'
        },
        notEmpty: {
          msg: 'Home address is required'
        }
      }
    },
    officeAddress: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Office address is required'
        },
        notEmpty: {
          msg: 'Office address is required'
        }
      }
    },
    officeLat: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Office latitude is required'
        },
        notEmpty: {
          msg: 'Office latitude is required'
        }
      }
    },
    officeLong: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Office longitude is required'
        },
        notEmpty: {
          msg: 'Office longitude is required'
        }
      }
    },
    lowestBudget: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Lowest budget is required'
        },
        notEmpty: {
          msg: 'Lowest budget is required'
        },
        min: {
          args: 1000,
          msg: 'Lowest budget must be at least 1000'
        }
      }
    },
    highestBudget: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Highest budget is required'
        },
        notEmpty: {
          msg: 'Highest budget is required'
        }
      }
    },
    isRenting: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      validate: {
        notNull: {
          msg: 'isRenting is required'
        },
        notEmpty: {
          msg: 'isRenting is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate(user) {
        user.password = hash(user.password);
      },
      beforeUpdate(user) {
        user.password = hash(user.password);
      }
    }
  });
  return User;
};
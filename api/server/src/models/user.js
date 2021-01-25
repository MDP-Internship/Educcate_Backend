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
  };
  User.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    currency_level: DataTypes.STRING,
    basket: DataTypes.STRING,
    credit: DataTypes.DOUBLE,
    roleId: DataTypes.STRING,
    isRemoved: DataTypes.INTEGER,
    payment_method: DataTypes.INTEGER,
    payment_number: DataTypes.INTEGER,
    amount_paid: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
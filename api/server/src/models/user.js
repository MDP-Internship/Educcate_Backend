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
      models.User.belongsToMany(models.Rate,{
        through:models.UserRate,
        foreignKey : 'user_id',
        otherKey:  'company_id',
      })
    }
  };
  User.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    currency_level: DataTypes.STRING,
    basket: DataTypes.STRING,
    credit: DataTypes.INTEGER,
    roleId: DataTypes.STRING,
    isRemoved: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
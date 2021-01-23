'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Rate.belongsToMany(models.User,{
        through: models.UserRate,
        foreignKey: 'rate_id',
        otherKey: 'user_id'
      })
    }
  };
  Rate.init({
    name: DataTypes.STRING,
    rate_hour: DataTypes.STRING,
    teacher_name: DataTypes.STRING,
    limit: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Rate',
  });
  return Rate;
};
"use strict";

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return User;
};
//# sourceMappingURL=admin.js.map
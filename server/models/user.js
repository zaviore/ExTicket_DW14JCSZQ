"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      username: DataTypes.STRING,
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      gender: DataTypes.ENUM("male", "female"),
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      role: DataTypes.ENUM("admin", "user")
    },
    {}
  );

  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};

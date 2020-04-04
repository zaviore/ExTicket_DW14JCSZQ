"use strict";
module.exports = (sequelize, DataTypes) => {
  const liststation = sequelize.define(
    "liststation",
    {
      code: DataTypes.STRING,
      name: DataTypes.STRING,
      city: DataTypes.STRING
    },
    {}
  );
  liststation.associate = function(models) {
    // associations can be defined here
  };
  return liststation;
};

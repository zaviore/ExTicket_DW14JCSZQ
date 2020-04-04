"use strict";
module.exports = (sequelize, DataTypes) => {
  const typetrain = sequelize.define(
    "typetrain",
    {
      type_train: DataTypes.STRING
    },
    {}
  );
  typetrain.associate = function(models) {
    // associations can be defined here
  };
  return typetrain;
};

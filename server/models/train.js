"use strict";
module.exports = (sequelize, DataTypes) => {
  const train = sequelize.define(
    "train",
    {
      name: DataTypes.STRING,
      type: DataTypes.INTEGER
    },
    {}
  );
  train.associate = function(models) {
    train.belongsTo(models.typetrain, { foreignKey: "type", as: "types" });
  };
  return train;
};

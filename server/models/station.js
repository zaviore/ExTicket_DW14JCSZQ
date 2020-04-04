"use strict";
module.exports = (sequelize, DataTypes) => {
  const station = sequelize.define(
    "station",
    {
      train: DataTypes.STRING,
      startStation: DataTypes.INTEGER,
      typetrain: DataTypes.STRING,
      dateStart: DataTypes.DATEONLY,
      startTime: DataTypes.TIME,
      arrivalTime: DataTypes.TIME,
      destination: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      qty: DataTypes.INTEGER
    },
    {}
  );

  station.associate = function(models) {
    station.belongsTo(models.train, {
      foreignKey: "train",
      as: "names"
    });

    station.belongsTo(models.liststation, {
      foreignKey: "startStation",
      as: "start"
    });

    station.belongsTo(models.liststation, {
      foreignKey: "destination",
      as: "destiny"
    });
  };
  return station;
};

"use strict";
module.exports = (sequelize, DataTypes) => {
  const payment = sequelize.define(
    "payment",
    {
      id_user: DataTypes.INTEGER,
      id_station: DataTypes.INTEGER,
      qty: DataTypes.INTEGER,
      date: DataTypes.DATE,
      status: DataTypes.STRING,
      total: DataTypes.STRING,
      attachment: DataTypes.STRING
    },
    {}
  );
  payment.associate = function(models) {
    payment.belongsTo(models.station, {
      foreignKey: "id_station",
      as: "idstation"
    });
    payment.belongsTo(models.user, {
      foreignKey: "id_user",
      as: "iduser"
    });
  };
  return payment;
};

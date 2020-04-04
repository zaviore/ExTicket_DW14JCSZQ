"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("stations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      train: {
        type: Sequelize.STRING
      },
      startStation: {
        type: Sequelize.INTEGER
      },
      typetrain: {
        type: Sequelize.STRING
      },
      dateStart: {
        type: Sequelize.DATEONLY
      },
      startTime: {
        type: Sequelize.TIME
      },
      arrivalTime: {
        type: Sequelize.TIME
      },
      destination: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
      },
      qty: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("stations");
  }
};

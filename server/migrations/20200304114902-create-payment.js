"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("payments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_user: {
        type: Sequelize.INTEGER
      },
      id_station: {
        type: Sequelize.INTEGER
      },
      qty: {
        type: Sequelize.INTEGER
      },

      date: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING
      },
      total: {
        type: Sequelize.STRING
      },
      attachment: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable("payments");
  }
};

"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("typeTrains", [
      {
        type_train: "ekonomi",

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type_train: "bussiness",

        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("People", null, {});
  }
};

"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        username: "zamhadi",
        name: "zam",
        email: "zamhadi@gmail.com",
        password: "zam",
        gender: "male",
        phone: "08991123213",
        address: "jl. elang II, permata bintaro residence",
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "kevin21",
        name: "kevin",
        email: "kevin@gmail.com",
        password: "kevin",
        gender: "male",
        phone: "0822111211",
        address: "jl. bintaro residence",
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "gilanggaul",
        name: "gilang",
        email: "gilang@gmail.com",
        password: "gilang",
        gender: "male",
        phone: "08991121233",
        address: "jl. elang III, bintaro residence",
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};

"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const { encryptPassword } = require("../helpers");
    return queryInterface.bulkInsert("Users", [
      {
        name: "Admin",
        email: "admin@gmail.com",
        password: await encryptPassword("admin"),
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Alice",
        email: "alice@gmail.com",
        password: await encryptPassword("student"),
        role: "student",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bob",
        email: "bob@gmail.com",
        password: await encryptPassword("student"),
        role: "student",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rahman Insani",
        email: "rahman@gmail.com",
        password: await encryptPassword("student"),
        role: "student",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

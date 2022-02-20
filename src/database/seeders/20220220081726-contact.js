'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Contacts', [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john_doe@gmail.com',
        phoneNumber: '+2348093833748',
        isOldContact: false
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane_doe@gmail.com',
        phoneNumber: '+2347033889900',
        isOldContact: false
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Contacts', null, {});
     */
  }
};

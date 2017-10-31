'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('users', [
      {
        firstName: 'New',
        lastName: 'User',
        email: 'cqlanus+03@gmail.com',
        password: 'hello123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {individualHooks: true});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('users', {firstName: 'New'});
  }
};

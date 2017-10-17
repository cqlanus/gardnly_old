'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    queryInterface.dropTable('stations')
      .then(() => {
        return queryInterface.createTable('stations', {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          station_id: {
            type: Sequelize.STRING
          },
          wban: {
            type: Sequelize.STRING
          },
          station_name: {
            type: Sequelize.STRING
          },
          state: {
            type: Sequelize.STRING
          },
          center: {
            type: Sequelize.GEOMETRY
          },
          elevation: {
            type: Sequelize.FLOAT
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn('NOW')
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn('NOW')
          }
        });
      });

  },

  down: function (queryInterface, Sequelize) {

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    queryInterface.dropTable('stations')
      .then(() => {
        return queryInterface.createTable('stations', {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          usaf: {
            type: Sequelize.STRING
          },
          wban: {
            type: Sequelize.STRING
          },
          station_name: {
            type: Sequelize.STRING
          },
          country: {
            type: Sequelize.STRING
          },
          state: {
            type: Sequelize.STRING
          },
          call_letters: {
            type: Sequelize.STRING
          },
          center: {
            type: Sequelize.GEOMETRY
          },
          elevation: {
            type: Sequelize.STRING
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn('NOW')
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn('NOW')
          }
        });
      });


  }
};

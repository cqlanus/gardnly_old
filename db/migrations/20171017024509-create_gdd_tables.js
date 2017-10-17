'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable('degree_day_40', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      station_id: {
        allowNull: false,
        type: Sequelize.STRING},
      month: {
        allowNull: false,
        type: Sequelize.INTEGER},
      heating_units: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.INTEGER)},
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
    })
      .then(() => {
        return queryInterface.createTable('degree_day_50', {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          station_id: {
            allowNull: false,
            type: Sequelize.STRING},
          month: {
            allowNull: false,
            type: Sequelize.INTEGER},
          heating_units: {
            allowNull: false,
            type: Sequelize.ARRAY(Sequelize.INTEGER)},
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

    return queryInterface.dropTable('degree_day_40')
      .then(() => queryInterface.dropTable('degree_day_50'));
  }
};

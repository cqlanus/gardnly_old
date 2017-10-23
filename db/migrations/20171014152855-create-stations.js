'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
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
      center: {
        type: Sequelize.GEOMETRY
      },
      elevation: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      station_name: {
        type: Sequelize.STRING
      },
      first_frost_50: {
        type: Sequelize.STRING
      },
      first_frost_90: {
        type: Sequelize.STRING
      },
      last_frost_50: {
        type: Sequelize.STRING
      },
      last_frost_90: {
        type: Sequelize.STRING
      },
      season_length_50: {
        type: Sequelize.INTEGER
      },
      season_length_90: {
        type: Sequelize.INTEGER
      },
      ann_gdd_50: {
        type: Sequelize.INTEGER
      },
      ann_gdd_90: {
        type: Sequelize.INTEGER
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
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('stations');
  }
};
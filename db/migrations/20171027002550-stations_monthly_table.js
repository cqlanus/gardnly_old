'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('stations_monthly', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      station_id: {
        type: Sequelize.STRING
      },
      month: {
        type: Sequelize.INTEGER
      },
      max_temps: {
        type:Sequelize.ARRAY(Sequelize.FLOAT)
      },
      min_temps: {
        type:Sequelize.ARRAY(Sequelize.FLOAT)
      },
      daily_gdd_40: {
        type:Sequelize.ARRAY(Sequelize.INTEGER)
      },
      daily_gdd_50: {
        type:Sequelize.ARRAY(Sequelize.INTEGER)
      },
      mtd_precip: {
        type:Sequelize.ARRAY(Sequelize.FLOAT)
      },
      mtd_snow: {
        type:Sequelize.ARRAY(Sequelize.FLOAT)
      },
      ytd_precip: {
        type:Sequelize.ARRAY(Sequelize.FLOAT)
      },
      ytd_snow: {
        type:Sequelize.ARRAY(Sequelize.FLOAT)
      },
      daily_precip_50: {
        type:Sequelize.ARRAY(Sequelize.FLOAT)
      },
      daily_precip_75: {
        type:Sequelize.ARRAY(Sequelize.FLOAT)
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

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('stations_monthly');

  }
};

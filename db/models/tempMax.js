const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('daily_max_temps', {
  station_id: {
    type: Sequelize.STRING,
    allownull: false,
  },
  wpan: {
    type: Sequelize.STRING
  },
  month: {
    type: Sequelize.INTEGER,
    allownull: false,
  },
  days: {
    type: Sequelize.ARRAY(Sequelize.FLOAT),
    allownull: false,
  }
});
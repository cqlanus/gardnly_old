const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('planting', {
  dateSown: {
    type: Sequelize.DATE,
    notNull: true
  },
  dateHarvested: {
    type: Sequelize.DATE
  },
  fromSeed: {
    type: Sequelize.BOOLEAN,
    notNull: true
  },
  startedIndoors: {
    type: Sequelize.BOOLEAN,
    notNull: true
  },
  dateTransplanted: {
    type: Sequelize.DATE
  },
  trellised: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});

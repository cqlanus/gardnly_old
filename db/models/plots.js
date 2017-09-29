const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('plot', {
  name: {
    type: Sequelize.STRING,
    notNull: true
  },
  length: {
    type: Sequelize.FLOAT,
    notNull: true,
  },
  width: {
    type: Sequelize.FLOAT,
    notNull: true,
  },
  type: {
    type: Sequelize.ENUM('raised', 'ground'),
    notNull: true
  },
  soilPh: {
    type: Sequelize.FLOAT,
    notNull: true
  },
  soilN: {
    type: Sequelize.ENUM('high', 'med', 'low')
  },
  soilP: {
    type: Sequelize.ENUM('high', 'med', 'low')
  },
  soilK: {
    type: Sequelize.ENUM('high', 'med', 'low')
  },
  sunExposure:  {
    type: Sequelize.ENUM('full', 'part', 'shade')
  },
  soilTexture: {
    type: Sequelize.ENUM('loam', 'sand', 'clay')
  },

});

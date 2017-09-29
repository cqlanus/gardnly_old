const Sequelize = require('sequelize');
const db = require('../db');

const Crop = db.define('crop', {
  commonName: {
    type: Sequelize.STRING,
    notNull: true,
  },
  latinName: {
    type: Sequelize.STRING,
    notNull: true,
  },
  family: {
    type: Sequelize.STRING,
    notNull: true,
  },
  seedDepth: {
    type: Sequelize.FLOAT,
    notNull: true,
  },
  minGermTemp: {
    type: Sequelize.INTEGER,
    notNull: true,
  },
  maxGermTemp: {
    type: Sequelize.INTEGER,
  },
  minGermTime: {
    type: Sequelize.INTEGER,
    notNull: true,
  },
  maxGermTime: {
    type: Sequelize.INTEGER,
  },
  sowIndoors: {
    type: Sequelize.INTEGER,
  },
  sowOutdoors: {
    type: Sequelize.INTEGER,
  },
  minSoilPh: {
    type: Sequelize.FLOAT,
    notNull: true,
  },
  maxSoilPh: {
    type: Sequelize.FLOAT,
    notNull: true,
  },
  minGrowTemp: {
    type: Sequelize.INTEGER,
    notNull: true,
  },
  maxGrowTemp: {
    type: Sequelize.INTEGER,
    notNull: true,
  },
  seedSpacing: {
    type: Sequelize.INTEGER,
    notNull: true,
  },
  thinTo: {
    type: Sequelize.INTEGER
  },
  rowSpacing: {
    type: Sequelize.INTEGER,
    notNull: true,
  },
  sunExposure: {
    type: Sequelize.ENUM('full', 'part', 'shade'),
    notNull: true,
    defaultValue: 'full',
  },
  waterFreq: {
    type: Sequelize.ENUM('low', 'med', 'high'),
    notNull: true,
  },
  nitrogenReq: {
    type: Sequelize.ENUM('low', 'med', 'high'),
    notNull: true,
  },
  phosphorusReq: {
    type: Sequelize.ENUM('low', 'med', 'high'),
    notNull: true,
  },
  potassiumReq: {
    type: Sequelize.ENUM('low', 'med', 'high'),
    notNull: true,
  },
  minFlowerToHarvestTime: {
    type: Sequelize.INTEGER,
  },
  maxFlowerToHarvestTime: {
    type: Sequelize.INTEGER,
  }


});

module.exports = Crop;
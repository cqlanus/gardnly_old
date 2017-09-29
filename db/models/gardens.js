const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('garden', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
  },
  length: {
    type: Sequelize.INTEGER,
    notNull: true,
  },
  width: {
    type: Sequelize.INTEGER,
    notNull: true,
  },
  location: {
    type: Sequelize.GEOMETRY
  },
  isPublic: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    notNull: true,
  }
});

const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('station', {
  usaf: {type: Sequelize.STRING},
  wban: {type: Sequelize.STRING},
  station_name: {type: Sequelize.STRING},
  country: {type: Sequelize.STRING},
  state: {type: Sequelize.STRING},
  call_letters: {type: Sequelize.STRING},
  latitude: {type: Sequelize.STRING},
  longitude: {type: Sequelize.STRING},
  elevation: {type: Sequelize.STRING},
});
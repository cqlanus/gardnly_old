const Sequelize = require('sequelize');
const db = require('../db');

const Station = db.define('stations', {
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
  gdd_40: {
    type: Sequelize.INTEGER
  },
  gdd_50: {
    type: Sequelize.INTEGER
  },
});

Station.findByZip = function(zip) {
  const query = `
  SELECT * FROM stations
  ORDER BY center <-> (SELECT center FROM zips WHERE zip='${zip}')
  LIMIT 5`;
  return db.query(query, { type: db.QueryTypes.SELECT})
    .then(stations => {
      let completeStations = stations.filter(station => station.first_frost_50 !== 'NaN');
      return completeStations[0];
    })
    .catch(console.log);
};

module.exports = Station;
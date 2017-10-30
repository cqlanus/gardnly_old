const Sequelize = require('sequelize');
const db = require('../db');

const StationMonthly = db.define('stations_monthly', {
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
});

StationMonthly.findByZip = function(zip) {
  const query = `
  SELECT * FROM stations
  ORDER BY center <-> (SELECT center FROM zips WHERE zip='${zip}')
  LIMIT 1`;
  return db.query(query, { type: db.QueryTypes.SELECT})
    .then(row => {
      const query = `
      SELECT * FROM stations_monthly
      WHERE station_id ='${row[0].station_id}'
      `;
      return db.query(query, { type: db.QueryTypes.SELECT});
    })
    .then(stationMonths => stationMonths)
    .catch(console.log);
};

module.exports = StationMonthly;
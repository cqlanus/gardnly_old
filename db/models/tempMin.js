const Sequelize = require('sequelize');
const db = require('../db');

const MinTemp = db.define('daily_min_temps', {
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

MinTemp.findByZip = function(zip) {
  const query = `
  SELECT * FROM stations
  ORDER BY center <-> (SELECT center FROM zips WHERE zip='${zip}')
  LIMIT 1`;
  return db.query(query, { type: db.QueryTypes.SELECT})
    .then(row => {
      const query = `
      SELECT * FROM daily_min_temps
      WHERE station_id ='${row[0].station_id}'
      `;
      return db.query(query, { type: db.QueryTypes.SELECT});
    })
    .then(maxTemps => maxTemps)
    .catch(console.log);
};

module.exports = MinTemp;
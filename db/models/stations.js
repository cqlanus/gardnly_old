'use strict';
module.exports = function(sequelize, DataTypes) {
  var stations = sequelize.define('stations', {
    station_id: DataTypes.STRING,
    wban: DataTypes.STRING,
    station_name: DataTypes.STRING,
    state: DataTypes.STRING,
    center: DataTypes.GEOMETRY,
    elevation: DataTypes.FLOAT
  });
  return stations;
};
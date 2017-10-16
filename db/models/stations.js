'use strict';
module.exports = function(sequelize, DataTypes) {
  var stations = sequelize.define('stations', {
    usaf: DataTypes.STRING,
    wban: DataTypes.STRING,
    station_name: DataTypes.STRING,
    country: DataTypes.STRING,
    state: DataTypes.STRING,
    call_letters: DataTypes.STRING,
    center: DataTypes.GEOMETRY,
    elevation: DataTypes.STRING
  });
  return stations;
};
'use strict';
module.exports = function(sequelize, DataTypes) {
  var stations = sequelize.define('stations', {
    station_id: DataTypes.STRING,
    wban: DataTypes.STRING,
    station_name: DataTypes.STRING,
    state: DataTypes.STRING,
    center: DataTypes.GEOMETRY,
    elevation: DataTypes.FLOAT,
    last_frost_50: DataTypes.STRING,
    last_frost_90: DataTypes.STRING,
    first_frost_50: DataTypes.STRING,
    first_frost_90: DataTypes.STRING,
    season_length_50: DataTypes.STRING,
    season_length_90: DataTypes.STRING,
    ann_gdd_50: DataTypes.STRING,
    ann_gdd_90: DataTypes.STRING,
  });
  return stations;
};

const User = require('./user');
const Crop = require('./crop');
const Garden = require('./gardens');
const Planting = require('./plantings');
const Plot = require('./plots');
const MaxTemp = require('./tempMax');
const MinTemp = require('./tempMin');
const Station = require('./stations');

/* User Relationships */
User.hasMany(Garden);

/* Garden Relationships */
Garden.hasMany(Plot);
Garden.belongsTo(User);

/* Plot Relationships */
Plot.hasMany(Planting);
Plot.belongsTo(Garden);

/* Planting Relationships */
Planting.belongsTo(Crop);
Planting.belongsTo(Plot);

/* Crops Relationships */
Crop.hasOne(Planting);



module.exports = {
  User,
  Crop,
  Garden,
  Planting,
  Plot,
  MaxTemp,
  MinTemp,
  Station
};
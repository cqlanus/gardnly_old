'use strict';
module.exports = function(sequelize, DataTypes) {
  var Zip = sequelize.define('zip', {
    zip: {
      allowNull: false,
      type: DataTypes.STRING
    },
    center: {
      allowNull: false,
      type: DataTypes.GEOMETRY
    }
  });
  return Zip;
};
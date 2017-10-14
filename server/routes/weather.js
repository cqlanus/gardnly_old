const TempMax = require('../../db').model('daily_max_temps');
const TempMin = require('../../db').model('daily_min_temps');
const Station = require('../../db').model('station');


module.exports = require('express').Router()
  .get('/tempmax/station/:stationId', (req, res, next) => {
    TempMax.findAll({
      where: { wpan: req.params.stationId }
    })
      .then(rows => res.json(rows))
      .catch(next);
  })
  .get('/tempmax/station/:stationId/month/:month', (req, res, next) => {
    TempMax.findOne({
      where: {
        wpan: req.params.stationId,
        month: req.params.month,
      }
    })
      .then(row => res.json(row))
      .catch(next);
  })
  .get('/tempmin/station/:stationId', (req, res, next) => {
    TempMin.findAll({
      where: { wpan: req.params.stationId }
    })
      .then(rows => res.json(rows))
      .catch(next);
  })
  .get('/tempmin/station/:stationId/month/:month', (req, res, next) => {
    TempMin.findOne({
      where: {
        wpan: req.params.stationId,
        month: req.params.month,
      }
    })
      .then(row => res.json(row))
      .catch(next);
  })
  .get('/stations/:stationId', (req, res, next) => {
    Station.findOne({
      where: {wpan: req.params.stationId}
    })
      .then(station => res.json(station))
      .catch(next);
  });

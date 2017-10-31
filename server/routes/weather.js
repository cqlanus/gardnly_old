const TempMax = require('../../db').model('daily_max_temps');
const TempMin = require('../../db').model('daily_min_temps');
const Station = require('../../db/models/stations');


module.exports = require('express').Router()
  .get('/tempmax/zip/:zip', (req, res, next) => {
    TempMax.findByZip(req.params.zip)
      .then(months => months.reduce((a,b) => a.concat(b.days), []))
      .then(temps => res.json(temps))
      .catch(next);
  })
  .get('/tempmax/zip/:zip/month/:month', (req, res, next) => {
    TempMax.findByZipAndMonth(req.params.zip, +req.params.month)
      .then(month => res.json(month))
      .catch(next);
  })
  .get('/tempmin/zip/:zip', (req, res, next) => {
    TempMin.findByZip(req.params.zip)
      .then(months => months.reduce((a,b) => a.concat(b.days), []))
      .then(temps => res.json(temps))
      .catch(next);
  })
  .get('/tempall/zip/:zip', (req, res, next) => {
    const minTemps = TempMin.findByZip(req.params.zip)
      .then(months => months.reduce((a,b) => a.concat(b.days), []));
    const maxTemps = TempMax.findByZip(req.params.zip)
      .then(months => months.reduce((a,b) => a.concat(b.days), []));

    Promise.all([minTemps, maxTemps])
      .then(([min, max]) => res.json({min, max}))
      .catch(next);

  })
  .get('/stations/:stationId', (req, res, next) => {
    Station.findOne({
      where: {station_id: req.params.stationId}
    })
      .then(station => res.json(station))
      .catch(next);
  })
  .get('/stations/zip/:zip', (req, res, next) => {
    Station.findByZip(req.params.zip)
      .then(station => res.json(station))
      .catch(next);
  })
  .get('/zip/:zip', (req, res, next) => {
    const station = Station.findByZip(req.params.zip);
    const minTemps = TempMin.findByZip(req.params.zip)
      .then(months => months.reduce((a,b) => a.concat(b.days), []));
    const maxTemps = TempMax.findByZip(req.params.zip)
      .then(months => months.reduce((a,b) => a.concat(b.days), []));

    Promise.all([station, minTemps, maxTemps])
      .then(([station, min, max]) => res.json({ station, temps: { min, max } }))
      .catch(next);
  });

const Plot = require('../../db').model('plot');
const Planting = require('../../db').model('planting');


module.exports = require('express').Router()
  .get('/', (req, res, next) => {
    Plot.findAll()
      .then(plots => res.json(plots))
      .catch(next);
  })
  .get('/:plotId', (req, res, next) => {
    Plot.findById(req.params.plotId, {
      include: [{ model: Planting }]
    })
      .then(plot => res.json(plot))
      .catch(next);
  })
  .get('/:plotId/plantings', (req, res, next) => {
    Plot.findById(req.params.plotId, {
      include: [{ model: Planting }]
    })
      .then(plot => res.json(plot.plantings))
      .catch(next);
  })
  .post('/', (req, res, next) => {
    Plot.create(req.body)
      .then(plot => res.status(201).json(plot))
      .catch(next);
  })
  .put('/:plotId', (req, res, next) => {
    Plot.findById(req.params.plotId)
      .then(plot => plot.update(req.body))
      .then(updatedPlot => res.json(updatedPlot))
      .catch(next);
  })
  .delete('/:plotId', (req, res, next) => {
    Plot.findById(req.params.plotId)
      .then(plot => plot.destroy())
      .then(() => res.sendStatus(204))
      .catch(next);
  });

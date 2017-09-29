const Planting = require('../../db').model('planting');
const Crop = require('../../db').model('crop');

module.exports = require('express').Router()
  .get('/', (req, res, next) => {
    Planting.findAll({include: [Crop]})
      .then(plantings => res.json(plantings))
      .catch(next);
  })
  .get('/:plantingId', (req, res, next) => {
    Planting.findById(req.params.plantingId, {include: [Crop]})
      .then(planting => res.json(planting))
      .catch(next);
  })
  .post('/', (req, res, next) => {
    Planting.create(req.body)
      .then(planting => res.status(201).json(planting))
      .catch(next);
  })
  .put('/:plantingId', (req, res, next) => {
    Planting.findById(req.params.plantingId)
      .then(planting => planting.update(req.body))
      .then(updatedPlant => res.json(updatedPlant))
      .catch(next);
  })
  .delete('/:plantingId', (req, res, next) => {
    Planting.findById(req.params.plantingId)
      .then(planting => planting.destroy())
      .then(() => res.sendStatus(204))
      .catch(next);
  });

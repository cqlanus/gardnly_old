const Crop = require('../../db').model('crop');

module.exports = require('express').Router()
  .get('/', (req, res, next) => {
    Crop.findAll()
      .then(crops => res.json(crops))
      .catch(next);
  })
  .get('/:cropId', (req, res, next) => {
    Crop.findById(req. params.cropId)
      .then(crop => res.json(crop))
      .catch(next);
  })
  .post('/', (req, res, next) => {
    Crop.create(req.body)
      .then(crop => res.status(201).json(crop))
      .catch(next);
  })
  .put('/:cropId', (req, res, next) => {
    Crop.findById(req.params.cropId)
      .then(crop => crop.update(req.body))
      .then(updatedCrop => res.json(updatedCrop))
      .catch(next);
  })
  .delete('/:cropId', (req, res, next) => {
    Crop.findById(req.params.cropId)
      .then(crop => crop.destroy())
      .then(() => res.sendStatus(200))
      .catch(next);
  });

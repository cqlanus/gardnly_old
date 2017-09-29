const Garden = require('../../db').model('garden');
const Plot = require('../../db').model('plot');

module.exports = require('express').Router()
  .get('/', (req, res, next) => {
    Garden.findAll()
      .then(gardens => res.json(gardens))
      .catch(next);
  })
  .get('/:gardenId', (req, res, next) => {
    Garden.findById(req.params.gardenId, {
      include: [Plot]
    })
      .then(garden => res.json(garden))
      .catch(next);
  })
  .get('/:gardenId/plots', (req, res, next) => {
    Garden.findById(req.params.gardenId, {
      include: [Plot]
    })
      .then(garden => res.json(garden.plots))
      .catch(next);
  })
  .post('/', (req, res, next) => {
    Garden.create(req.body)
      .then(garden => {
        garden.setUser(req.user.id);
        return res.json(garden);
      })
      .catch(next);
  })
  .put('/:id', (req, res, next) => {
    Garden.findById(req.params.id)
      .then(garden => garden.update(req.body))
      .then(garden => res.json(garden))
      .catch(next);
  })
  .delete('/:id', (req, res, next) => {
    Garden.findById(req.params.id)
      .then(garden => garden.destroy())
      .then(() => res.sendStatus(204))
      .catch(next);
  });

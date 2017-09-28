const router = require('express').Router();
const {User} = require('../../db/models');

const { mustBeLoggedIn, adminOnly } = require('../auth/filters');
module.exports = router;

router.get('/', mustBeLoggedIn, adminOnly('You must be admin'), (req, res, next) => {
  User.findAll({
    attributes: { exclude: ['password', 'salt'] }
  })
    .then(users => res.json(users))
    .catch(next);
});

router.get('/:userId', mustBeLoggedIn, (req, res, next) => {
  User.findOne({
    where: { id: req.params.userId },
    attributes: { exclude: ['password', 'salt'] }
  })
    .then(user => res.json(user))
    .catch(next);
});

router.post('/', (req, res, next) => {
  User.create(req.body)
    .then(user => res.status(201).json(user))
    .catch(next);
});

router.put('/:userId', (req, res, next) => {
  User.update(req.body, {
    where: { id: req.params.userId }
  })
    .then(user => res.json(user))
    .catch(next);
});

router.delete('/:userId', (req, res, next) => {
  User.findById(req.params.userId)
    .then(user => user.destroy())
    .then(() => res.sendStatus(204))
    .catch(next);
});



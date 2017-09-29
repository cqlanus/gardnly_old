const router = require('express').Router();
module.exports = router;

router.use('/users', require('./users'));
router.use('/gardens', require('./gardens'));
router.use('/plots', require('./users'));
router.use('/plantings', require('./users'));
router.use('/crops', require('./crops'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
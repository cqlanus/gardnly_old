const router = require('express').Router();
module.exports = router;

router.use('/users', require('./users'));
router.use('/gardens', require('./gardens'));
router.use('/plots', require('./plots'));
router.use('/plantings', require('./plantings'));
router.use('/crops', require('./crops'));
router.use('/awhere', require('./awhere'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
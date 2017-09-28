const mustBeLoggedIn = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send('You mustBeLoggedIn');
  }
  next();
};

const selfOnly = action => (req, res, next) => {
  if (req.params.id !== req.user.id) {
    return res.status(403).send(`You can only ${action} yourself.`);
  }
  next();
};

const forbidden = message => (req, res) => {
  res.status(403).send(message);
};

const adminOnly = message => (req, res, next) => {

  if (!req.user.isAdmin) {
    return res.status(403).send(message);
  }
  console.log('req.user', req.user.isAdmin);
  console.log('here is message:', message);
  next();
};

module.exports = { mustBeLoggedIn, selfOnly, forbidden, adminOnly };
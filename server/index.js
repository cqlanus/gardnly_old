const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const db = require('../db');
const sessionStore = new SequelizeStore({db});
const PORT = process.env.PORT || 8000;
const app = express();
module.exports = app;

if (process.env.NODE_ENV !== 'production') require('../secrets');

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
  return db.models.user.findById(id)
    .then(user => done(null, user))
    .catch(done);
});

const createApp = () => {
  app.use(morgan('dev'));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  app.use(session({
    secret: process.env.SESSION_SECRET || 'not a safe secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  app.use('/auth', require('./auth'));
  app.use('/api', require('./routes'));

  app.use(express.static(path.join(__dirname, '..', 'public')));

  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'));
  });

  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });
};

const startListening = () => {
  const server = app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
};

const syncDb = () => db.sync({});

if (require.main === module) {
  sessionStore.sync()
    .then(syncDb)
    .then(createApp)
    .then(startListening);
} else {
  createApp();
}
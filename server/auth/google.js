const passport = require('passport');
const router = require('express').Router();
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const {User} = require('../../db/models');
module.exports = router;

const googleConfig = {
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackUrl: process.env.GOOGLE_CALLBACK
};

const strategy = new GoogleStrategy(googleConfig, (token, refreshToken, profile, done) => {
  const googleId = profile.id;
  const firstName = profile.displayName.split(' ')[0];
  const lastName = profile.displayName.split(' ')[1];
  const email = profile.emails[0].value;

  User.find({ where: {googleId} })
    .then(user => user ? done(null, user) :
      User.create({firstName, lastName, googleId, email}))
    .then(user => done(null, user))
    .catch(done);
});

passport.use(strategy);

router.get('/', passport.authenticate('google', {
  successRedirect: '/home',
  failureRedirect: '/login'
}));
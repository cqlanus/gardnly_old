const crypto = require('crypto');
const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('user', {
  firstName: {
    type: Sequelize.STRING,
    notNull: true
  },
  lastName: {
    type: Sequelize.STRING,
    notNull: true
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    notNull: true,
    validate: { isEmail: true }
  },
  password: {
    type: Sequelize.STRING,
    notNull: true
  },
  salt: {
    type: Sequelize.STRING
  },
  googleId: {
    type: Sequelize.STRING
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});

module.exports = User;

/* Instance Methods */
User.prototype.correctPassword = function(pass) {
  return User.encryptPassword(pass, this.salt) === this.password;
};

/* Class Methods */
User.generateSalt = function() {
  return crypto.randomBytes(16).toString('base64');
};

User.encryptPassword = function (plainText, salt) {
  return crypto.createHash('sha1').update(plainText).update(salt).digest('hex');
};

/* Hooks */
const setSaltAndPassword = user => {
  if (user.changed('password')) {
    user.salt = User.generateSalt();
    user.password = User.encryptPassword(user.password, user.salt);
  }
};

User.beforeCreate(setSaltAndPassword);
User.beforeUpdate(setSaltAndPassword);
const Promise = require('bluebird');
const db = require('./db');

const { User } = require('./models');

const users = [
  {
    firstName: 'Chris',
    lastName: 'User',
    email: 'cqlanus@gmail.com',
    password: 'hello123'
  },
  {
    firstName: 'Chris',
    lastName: 'admin',
    email: 'cqlanus+01@gmail.com',
    password: 'password123',
    isAdmin: true
  },
  {
    firstName: 'Shannon',
    lastName: 'User',
    email: 'cqlanus+02@gmail.com',
    password: 'abc123'
  }
];

db.sync({ force: true })
  .then(() => {
    console.log('old data dropped, now inserting users');
    return Promise.map(users, user => User.create(user));
  })
  .catch(err => console.error('problem', err))
  .finally(() => db.close());
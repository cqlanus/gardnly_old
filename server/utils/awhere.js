const aWhereAuth = require('../../secrets').aWhereAuth;
const request = require('./https');

const authenticate = () => {
  if (!aWhereAuth.base64) {
    aWhereAuth.base64 = new Buffer(`${aWhereAuth.key}:${aWhereAuth.secret}`).toString('base64');
  }

  const authOptions = {
    method: 'POST',
    host: 'api.awhere.com',
    path: '/oauth/token',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${aWhereAuth.base64}`
    }
  };

  console.log('authOptions', authOptions);

  let authPromise = null;
  if (!aWhereAuth.token) {
    console.log('no token');
    authPromise = request(authOptions, 'grant_type=client_credentials');
  } else {
    authPromise = new Promise((resolve, reject) => {resolve() });
  }

  return authPromise
    .then(response => {
      if(response) {
        console.log(response.body);
        aWhereAuth.token = response.body.access_token;
      }
    });
};

module.exports = {request, authenticate};

const https = require('https');

// request encapsulates common request functionality allowing
// us to perform web request in a common way.
//
// options: https options used to make the request.
// body:    the body, if any, to be written in the request.
const request = function (options, body) {
  return new Promise((resolve, reject) => {
    const request = https.request(options, (response) => {
      if (response.statusCode < 200 || response.statusCode > 299) {
        reject(new Error('Failed to load page, status code: ' + response.statusCode));
      }
      response.body = [];
      response.on('data', (chunk) => response.body.push(chunk));
      response.on('end', () => {
        response.body = JSON.parse(response.body);
        resolve(response);
      });
    });
    request.on('error', (err) => reject(err));
    if (body != undefined) {
      console.log('writing the body...');
      request.write(body);
    }
    request.end();
  });
};

module.exports = request;
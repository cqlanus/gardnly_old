const router = require('express').Router();
const {request, authenticate} = require('../utils/awhere');
const aWhereAuth = require('../../secrets').aWhereAuth;

module.exports = router;

/*
  1. App authenticates, receives a token
  2. User creates a field (at a specific lat/lng --> same lat/lng as garden location)
    * give it a id, and a farmId
    * happens when user creates garden - how is id generated? autoincremented?
  3. On success, store that field id in db (in garden table)
  4. Use that field id to collect more information about that location
    * get historical norms
*/

router.post('/fields', (req, res, next) => {
  authenticate()
    .then(() => {
      const fieldBody = {
        id: req.body.id,
        name: req.body.name,
        farmId: req.body.farmId,
        acres: req.body.acres,
        centerPoint: req.body.center,
      };
      const fieldOptions = {
        method: 'POST',
        host: 'api.awhere.com',
        path: '/v2/fields',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${aWhereAuth.token}`
        }
      };
      return request(fieldOptions, JSON.stringify(fieldBody));
    })
    .then(response => {
      // update garden model with fieldId
      res.json(response.body);
    })
    .catch(next);
});

router.get('/fields/:fieldId', (req, res, next) => {
  authenticate()
    .then(() => {
      const fieldId = req.params.fieldId;

      const fieldOptions = {
        method: 'GET',
        host: 'api.awhere.com',
        path: `/v2/fields${fieldId}`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${aWhereAuth.token}`
        }
      };
      return request(fieldOptions);
    })
    .then(field => res.json(field))
    .catch(next);
});

router.get('/norms/:fieldId', (req, res, next) => {
  authenticate()
    .then(() => {
      const fieldId = req.params.fieldId;
      const {start, end} = req.body;
      const fieldOptions = {
        method: 'GET',
        host: 'api.awhere.com',
        path: `/v2/weather/fields/${fieldId}/norms/${start},${end}`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${aWhereAuth.token}`
        }
      };

      return request(fieldOptions);
    })
    .then(field => res.json(field))
    .catch(next);
});

router.post('/maps/:fieldId', (req, res, next) => {
  authenticate()
    .catch(next);
});

router.get('/fields/:zip', (req, res, next) => {
  authenticate()
    .then(() => {
      // create a field and save it somewhere - garden table?
      const fieldBody = {
        id: 'testField3',
        name: 'testField1',
        farmId: 'testFarm1',
        acres: 1.0,
        centerPoint: { latitude: 41.970389, longitude: -87.683393 },
      };

      const fieldOptions = {
        method: 'POST',
        host: 'api.awhere.com',
        path: '/v2/fields',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${aWhereAuth.token}`
        }
      };
      console.log('field options', fieldOptions);
      return request(fieldOptions, JSON.stringify(fieldBody));
    })
    .then(response1 => {
      console.log('success', response1);
      res.json(response1.body);
    })
    .catch(next);
});

router.get('/', (req, res, next) => {
  authenticate()
    .then(() => {
      const fieldOptions = {
        method: 'GET',
        host: 'api.awhere.com',
        path: '/v2/weather/fields/testfield1/norms/01-01,01-10',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${aWhereAuth.token}`
        }
      };

      return request(fieldOptions);
    })
    .then(response => {
      console.log('success', response.body);
      res.json(response.body);
    })
    .catch(console.error);
});
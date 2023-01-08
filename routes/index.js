const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Hazel Waite');
});

routes.get('/test', (req, res) => {
  res.send('Henry Waite');
});

module.exports = routes;

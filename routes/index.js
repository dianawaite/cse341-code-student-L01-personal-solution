const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Hazel Waite');
});

module.exports = routes;

const express = require('express');
const router = express.Router();

const album = require('./album.router');
const user = require('./user.router');
const portfolio = require('./portfolio.router');
const signin = require('./signin.router');

/* GET home page. */
router.get('/', function(req, res) {
  res.send('Hello World!');
});
router.use('/albums', album);
router.use('/users', user);
router.use('/portfolio', portfolio);
router.use('/signin', signin);

module.exports = router;

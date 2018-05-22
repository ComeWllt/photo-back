const express = require('express');

const router = express.Router();

const signin_controller = require('../controllers/signin.controller');

router.post('/', signin_controller.create);


module.exports = router;
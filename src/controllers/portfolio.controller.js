const Portfolios = require('../models/portfolio');
const { getToken } = require('./getToken');

exports.get = function (req,res,next) {
  const token = getToken(req.headers);
  if (token) {
    Portfolios.find()
      .then((portfolio) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(portfolio);
      }, (err) => next(err))
      .catch((err) => next(err));
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
};

exports.create = function (req, res) {
  const token = getToken(req.headers);
  if (token) {
    res.statusCode = 403;
    res.end('POST operation not supported on /portfolio');
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
};

exports.update = function (req, res, next) {
  const token = getToken(req.headers);
  if (token) {
    Portfolios.find({
      $set: req.body
    }, { new: true })
      .then((album) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(album);
      }, (err) => next(err))
      .catch((err) => next(err));
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
};

exports.remove = function (req, res, next) {
  const token = getToken(req.headers);
  if (token) {
    Portfolios.find()
      .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
      }, (err) => next(err))
      .catch((err) => next(err));
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
};


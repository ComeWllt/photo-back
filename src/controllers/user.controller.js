const Users = require('../models/user');
const { getToken } = require('./getToken');

exports.getAll = function (req,res,next) {
  const token = getToken(req.headers);
  if (token) {
    Users.find()
      .then((users) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(users);
      }, (err) => next(err))
      .catch((err) => next(err));
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
};

exports.create = function (req, res, next) {
  const token = getToken(req.headers);
  if (token) {
    Users.create(req.body)
      .then((user) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(user);
      }, (err) => next(err))
      .catch((err) => next(err));
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
};

exports.update = function (req, res) {
  const token = getToken(req.headers);
  if (token) {
    res.statusCode = 403;
    res.end('PUT operation not supported on /users');
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
};

exports.removeAll = function (req, res) {
  const token = getToken(req.headers);
  if (token) {
    res.statusCode = 403;
    res.end('DELETE operation not allowed on /users'); 
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
};

exports.getById = function (req,res,next) {
  const token = getToken(req.headers);
  if (token) {
    Users.findById(req.params.userId)
      .then((user) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(user);
      }, (err) => next(err))
      .catch((err) => next(err));
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
};

exports.createById = function (req, res) {
  const token = getToken(req.headers);
  if (token) {
    res.statusCode = 403;
    res.end('POST operation not supported on /users/'+ req.params.userId);
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
};

exports.updateById = function (req, res, next) {
  const token = getToken(req.headers);
  if (token) {
    if (req.body.password) {
      req.body.password=Users.schema.methods.encryptPassword(req.body.password);
    }
    Users.findByIdAndUpdate(req.params.userId, {
      $set: req.body
    }, { new: true })
      .then((user) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(user);
      }, (err) => next(err))
      .catch((err) => next(err));
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
};

exports.removeById = function (req, res, next) {
  const token = getToken(req.headers);
  if (token) {
    Users.findByIdAndRemove(req.params.userId)
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

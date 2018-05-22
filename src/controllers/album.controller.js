const Albums = require('../models/album');
const { getToken } = require('./getToken');

exports.getAll = function (req,res,next) {
  const token = getToken(req.headers);
  if (token) {
    Albums.find().sort({'date':-1})
      .then((albums) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(albums);
      }, (err) => next(err))
      .catch((err) => next(err));
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
};

exports.create = function (req, res, next) {
  const token = getToken(req.headers);
  if (token) {
    Albums.create(req.body)
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

exports.update = function (req, res) {
  const token = getToken(req.headers);
  if (token) {
    res.statusCode = 403;
    res.end('PUT operation not supported on /albums');
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
};

exports.removeAll = function (req, res) {
  const token = getToken(req.headers);
  if (token) {
    res.statusCode = 403;
    res.end('DELETE operation not allowed on /albums'); 
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
};

exports.getById = function (req,res,next) {
  const token = getToken(req.headers);
  if (token) {
    Albums.findById(req.params.albumId)
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

exports.createById = function (req, res) {
  const token = getToken(req.headers);
  if (token) {
    res.statusCode = 403;
    res.end('POST operation not supported on /albums/'+ req.params.albumId);
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
};

exports.updateById = function (req, res, next) {
  const token = getToken(req.headers);
  if (token) {
    Albums.findByIdAndUpdate(req.params.albumId, {
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

exports.removeById = function (req, res, next) {
  const token = getToken(req.headers);
  if (token) {
    Albums.findByIdAndRemove(req.params.albumId)
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

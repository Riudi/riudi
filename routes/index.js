var express = require('express');
var router = express.Router();
var models = require('../models/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// POST create image
router.post('/images', function(req, res) {
  models.Image.create({
    name:req.body.name,
    page:req.body.page,
    resource:req.body.resource,
    url:req.body.url
  }).then(function(image) {
    res.json(image);
  });
});

// GET all
router.get('/images', function(req, res) {
  models.Todo.findAll({}).then(function(images) {
    res.json(images);
  });
});

// GET single
router.get('/image/:id', function(req, res) {
  models.Image.find({
    where: {
      id: req.params.id
    }
  }).then(function(image) {
    res.json(image);
  });
});

// PUT update single
router.put('/image/:id', function(req, res) {
  models.Image.find({
    where: {
      id: req.params.id
    }
  }).then(function(image) {
    if(image){
      image.updateAttributes({
        name: req.body.name,
        page: req.body.page,
        resource:req.body.resource,
        url:req.body.url
      }).then(function(image) {
        res.send(image);
      });
    }
  });
});





module.exports = router;

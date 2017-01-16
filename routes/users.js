var express = require('express');
var router = express.Router();
var UserController = require('../controllers/userController');

router.get('/create', function(req, res, next) {
    var controller = new UserController(req, res, next);
    controller.createView();
});

router.post('/create', function(req, res, next) {
  var controller = new UserController(req, res, next);
  controller.createAction(req.body);
});

module.exports = router;

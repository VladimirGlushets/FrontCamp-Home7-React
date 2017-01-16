var express = require('express');
var router = express.Router();
var ArticleController = require('../controllers/articleController');
var UserController = require('../controllers/userController');
var passport = require('passport');
var passportModule = require('../authentication');

/* GET home page. */
router.get('/',
    function(req, res, next) {
        var controller = new ArticleController(req, res, next);
        controller.index();
    });

router.get('/login', function(req, res, next) {
    var controller = new UserController(req, res, next);
    controller.login();
});

router.post('/login',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login'
    })
);

router.get('/logout', function(req, res, next){
  var controller = new UserController(req, res, next);
  controller.logout();
});

/* GET create new article. */
router.get('/articles/create', passportModule.middleware(),  function(req, res, next) {
    var controller = new ArticleController(req, res, next);
    controller.createArticleView();
})

/* GET update article. */
router.get('/articles/update/:articleId', function(req, res, next) {
    var controller = new ArticleController(req, res, next);
    controller.createArticleView(req.params['articleId']);
})

/* GET article detail. */
router.get('/articles/:articleId', function(req, res, next) {
    var controller = new ArticleController(req, res, next);
    controller.details(req.params['articleId']);

    //res.send(req.params['articleId']);
})

/* POST create new article. */
router.post('/articles/create', function(req, res, next) {
    var controller = new ArticleController(req, res, next);
    controller.createArticleAction(req.body);
})

/* POST article update. */
router.post('/articles/update', function(req, res, next) {
    var controller = new ArticleController(req, res, next);
    controller.update(req.body);
})

/* DELETE article detail. */
router.delete('/articles/delete', function(req, res, next) {
    var controller = new ArticleController(req, res, next);
    controller.delete(req.body['articleId']);

    //console.log(req.params);
    //console.log(req.body);
    //console.log(req.query);
})

module.exports = router;

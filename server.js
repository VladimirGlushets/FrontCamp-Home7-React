module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded chunks
/******/ 	// "1" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0:1
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "1" is the signal for "already loaded"
/******/ 		if(!installedChunks[chunkId]) {
/******/ 			var chunk = require("./" + chunkId + ".server.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		}
/******/ 		callback.call(null, __webpack_require__);
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var express = __webpack_require__(1);
	var path = __webpack_require__(2);
	var favicon = __webpack_require__(3);
	var logger = __webpack_require__(4);
	var cookieParser = __webpack_require__(5);
	var bodyParser = __webpack_require__(6);
	var session = __webpack_require__(7);
	var passport = __webpack_require__(8);

	var mongoose = __webpack_require__(9);
	var MongoStore = __webpack_require__(13)(session);
	var config = __webpack_require__(11);

	var articles = __webpack_require__(14);
	var apiArticles = __webpack_require__(40);
	var users = __webpack_require__(42);

	var app = express();

	// view engine setup
	// app.set('views', path.join(__dirname, 'views'));
	// app.set('view engine', 'jade');
	app.engine('ejs', __webpack_require__(43)); //layout partial block
	app.set('views', path.join(__dirname, '/templates'));
	app.set('view engine', 'ejs');

	// uncomment after placing your favicon in /public
	//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(cookieParser());
	app.use(express.static(path.join(__dirname, 'public')));

	// auth settings
	__webpack_require__(36).init(app);
	app.use(session({
	    store: new MongoStore({
	        mongooseConnection: mongoose.connection
	    }),
	    secret: "KillerIsJim",
	    key: "sid"
	    // resave: false,
	    // saveUninitialized: false
	}));

	// auth settings
	app.use(passport.initialize());
	app.use(passport.session());

	app.use('/', articles);
	app.use('/api/articles', apiArticles);
	app.use('/users', users);

	// catch 404 and forward to error handler
	app.use(function (req, res, next) {
	    var err = new Error('Not Found');
	    err.status = 404;
	    next(err);
	});

	// error handler
	app.use(function (err, req, res, next) {
	    // set locals, only providing error in development
	    res.locals.message = err.message;
	    res.locals.error = req.app.get('env') === 'development' ? err : {};

	    // render the error page
	    res.status(err.status || 500);
	    res.render('error');
	});

	module.exports = app;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("serve-favicon");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("morgan");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("cookie-parser");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("express-session");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("passport");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var mongoose = __webpack_require__(10);
	var config = __webpack_require__(11);

	mongoose.Promise = global.Promise;

	mongoose.connect("mongodb://nodetest:nodetest@ds135818.mlab.com:35818/heroku_c694rvx3/postdb", config.get('mongoose:options'));

	module.exports = mongoose;

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("mongoose");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var nconf = __webpack_require__(12);
	var path = __webpack_require__(2);

	nconf.argv().env().file({
	    file: path.join(__dirname, 'config.json')
	});

	module.exports = nconf;

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("nconf");

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("connect-mongo");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var express = __webpack_require__(1);
	var router = express.Router();
	var ArticleController = __webpack_require__(15);
	var UserController = __webpack_require__(32);
	var passport = __webpack_require__(8);
	var passportModule = __webpack_require__(36);

	/* GET home page. */
	router.get('/', function (req, res, next) {
	    var controller = new ArticleController(req, res, next);
	    controller.index();
	});

	router.get('/login', function (req, res, next) {
	    var controller = new UserController(req, res, next);
	    controller.login();
	});

	router.post('/login', passport.authenticate('local', {
	    successRedirect: '/',
	    failureRedirect: '/login'
	}));

	router.get('/logout', function (req, res, next) {
	    var controller = new UserController(req, res, next);
	    controller.logout();
	});

	/* GET create new article. */
	router.get('/articles/create', passportModule.middleware(), function (req, res, next) {
	    var controller = new ArticleController(req, res, next);
	    controller.createArticleView();
	});

	/* GET update article. */
	router.get('/articles/update/:articleId', function (req, res, next) {
	    var controller = new ArticleController(req, res, next);
	    controller.createArticleView(req.params['articleId']);
	});

	/* GET article detail. */
	router.get('/articles/:articleId', function (req, res, next) {
	    var controller = new ArticleController(req, res, next);
	    controller.details(req.params['articleId']);

	    //res.send(req.params['articleId']);
	});

	/* POST create new article. */
	router.post('/articles/create', function (req, res, next) {
	    var controller = new ArticleController(req, res, next);
	    controller.createArticleAction(req.body);
	});

	/* POST article update. */
	router.post('/articles/update', function (req, res, next) {
	    var controller = new ArticleController(req, res, next);
	    controller.update(req.body);
	});

	/* DELETE article detail. */
	router.delete('/articles/delete', function (req, res, next) {
	    var controller = new ArticleController(req, res, next);
	    controller.delete(req.body['articleId']);

	    //console.log(req.params);
	    //console.log(req.body);
	    //console.log(req.query);
	});

	module.exports = router;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(16);
	var ReactDOMServer = __webpack_require__(17);

	var BaseController = __webpack_require__(18);
	var ArticleService = __webpack_require__(19);
	var UrlsHelper = __webpack_require__(21);
	var layout = __webpack_require__(22);

	var ArticleController = function (_BaseController) {
	    _inherits(ArticleController, _BaseController);

	    function ArticleController(req, res, next) {
	        _classCallCheck(this, ArticleController);

	        var _this = _possibleConstructorReturn(this, (ArticleController.__proto__ || Object.getPrototypeOf(ArticleController)).call(this, req, res));

	        _this.req = req;
	        _this.res = res;
	        _this.next = next;
	        _this.articleService = new ArticleService();
	        return _this;
	    }

	    _createClass(ArticleController, [{
	        key: 'index',
	        value: function index() {
	            var _this2 = this;

	            var user = void 0;
	            if (this.req.user) {
	                user = this.req.user.username;
	            }

	            __webpack_require__.e/* require */(1, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(23)]; (function (Index) {
	                _this2.articleService.getAllArticles().then(function (data) {
	                    if (!data) {
	                        console.log(data);
	                    } else {
	                        var articles = [];
	                        for (var i = 0; i < data.length; i++) {
	                            var obj = {};
	                            obj.detailArticleUrl = UrlsHelper.getDetailsUrl(_this2.req.protocol, _this2.req.headers.host, data[i]._id);
	                            obj.deleteArticleUrl = UrlsHelper.getDeleteUrl(_this2.req.protocol, _this2.req.headers.host);
	                            obj.updateArticleUrl = UrlsHelper.getUpdateViewUrl(_this2.req.protocol, _this2.req.headers.host, data[i]._id);
	                            articles.push({ article: data[i], actionUrls: obj });
	                        }
	                        var createNewArticleUrl = UrlsHelper.getCreateUrl(_this2.req.protocol, _this2.req.headers.host);
	                        var initialState = { user: user, articles: articles, createNewArticleUrl: createNewArticleUrl };
	                        var Component = Index.default;
	                        var renderedString = ReactDOMServer.renderToString(React.createElement(Component, initialState));
	                        _this2.renderViewReact(_this2.res, 'Articles', renderedString, initialState, '../build/articlesBundle.js');
	                    }
	                }).catch(function (err) {
	                    console.log(err);
	                });
	            }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	        }
	    }, {
	        key: 'details',
	        value: function details(articleId) {
	            var _this3 = this;

	            var user = void 0;
	            if (this.req.user) {
	                user = this.req.user.username;
	            }

	            __webpack_require__.e/* require */(2, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(29)]; (function (Details) {
	                _this3.articleService.getArticleById(articleId).then(function (article) {
	                    if (!article) {
	                        console.log(article);
	                    } else {

	                        var deleteArticleUrl = UrlsHelper.getDeleteUrl(_this3.req.protocol, _this3.req.headers.host);
	                        var updateArticleUrl = UrlsHelper.getUpdateViewUrl(_this3.req.protocol, _this3.req.headers.host, article._id);

	                        var initialState = { user: user, article: article, deleteArticleUrl: deleteArticleUrl, updateArticleUrl: updateArticleUrl };
	                        var Component = Details.default;
	                        var renderedString = ReactDOMServer.renderToString(React.createElement(Component, initialState));
	                        _this3.renderViewReact(_this3.res, 'Article Details', renderedString, initialState, '../build/detailsBundle.js');
	                    }
	                }).catch(function (err) {
	                    console.log(err);
	                });
	            }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	        }
	    }, {
	        key: 'delete',
	        value: function _delete(articleId) {
	            var _this4 = this;

	            this.articleService.deleteArticle(articleId).then(function (result) {
	                _this4.res.send({
	                    result: result,
	                    redirectUrl: UrlsHelper.getHomeUrl(_this4.req.protocol, _this4.req.headers.host)
	                });
	            }, function (err) {
	                throw err;
	            });
	        }
	    }, {
	        key: 'createArticleView',
	        value: function createArticleView(articleId) {
	            var _this5 = this;

	            __webpack_require__.e/* require */(3, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(30)]; (function (CreateUpdateArticle) {
	                if (articleId) {
	                    _this5.articleService.getArticleById(articleId).then(function (article) {
	                        if (!article) {
	                            console.log(article);
	                        } else {

	                            var actionUrl = UrlsHelper.getUpdatePutUrl(_this5.req.protocol, _this5.req.headers.host);
	                            var _articleId = article._id;
	                            var title = article.title;
	                            var content = article.content;
	                            var userId = article.user.id;
	                            var userName = article.user.name;
	                            var authUserName = _this5.req.user.username;
	                            var btnText = "Update";

	                            var initialState = { actionUrl: actionUrl, articleId: _articleId, title: title, content: content, userId: userId, userName: userName, btnText: btnText, authUserName: authUserName };
	                            var Component = CreateUpdateArticle.default;
	                            var renderedString = ReactDOMServer.renderToString(React.createElement(Component, initialState));
	                            _this5.renderViewReact(_this5.res, 'Update Article', renderedString, initialState, '');
	                        }
	                    }).catch(function (err) {
	                        console.log(err);
	                    });
	                } else {

	                    var actionUrl = UrlsHelper.getCreateUrl(_this5.req.protocol, _this5.req.headers.host);
	                    var _articleId2 = '';
	                    var title = '';
	                    var content = '';
	                    var userId = _this5.req.user._id;
	                    var userName = _this5.req.user.username;
	                    var authUserName = _this5.req.user.username;
	                    var btnText = "Create";

	                    var initialState = { actionUrl: actionUrl, articleId: _articleId2, title: title, content: content, userId: userId, userName: userName, btnText: btnText, authUserName: authUserName };
	                    var Component = CreateUpdateArticle.default;
	                    var renderedString = ReactDOMServer.renderToString(React.createElement(Component, initialState));
	                    _this5.renderViewReact(_this5.res, 'Create Article', renderedString, initialState, '');
	                }
	            }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	        }
	    }, {
	        key: 'createArticleAction',
	        value: function createArticleAction(model) {
	            var _this6 = this;

	            this.articleService.createArticle(model).then(function (article) {
	                _this6.res.statusCode = 302;
	                _this6.res.setHeader("Location", "/");
	                _this6.res.end();
	            }, function (err) {
	                throw err;
	            });
	        }
	    }, {
	        key: 'update',
	        value: function update(model) {
	            var _this7 = this;

	            this.articleService.updateArticle(model).then(function (result) {
	                _this7.res.statusCode = 302;
	                _this7.res.setHeader("Location", "/");
	                _this7.res.end();
	            });
	        }
	    }, {
	        key: 'renderViewReact',
	        value: function renderViewReact(res, title, renderedString, initialState, reactBundlePath) {
	            res.send(layout({
	                body: renderedString,
	                title: title,
	                initialState: JSON.stringify(initialState),
	                reactBundlePath: reactBundlePath
	            }));
	        }
	    }, {
	        key: 'renderView',
	        value: function renderView(res, templateName, data) {
	            res.render(templateName, data);
	        }
	    }]);

	    return ArticleController;
	}(BaseController);

	module.exports = ArticleController;

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BaseController = function BaseController(req, res) {
	    _classCallCheck(this, BaseController);

	    res.locals.user = req.user;
	};

	module.exports = BaseController;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Article = __webpack_require__(20).Article;

	var ArticleService = function () {
	    function ArticleService() {
	        _classCallCheck(this, ArticleService);
	    }

	    _createClass(ArticleService, [{
	        key: 'getAllArticles',
	        value: function getAllArticles() {
	            return Article.find({}).exec();
	        }
	    }, {
	        key: 'getArticleById',
	        value: function getArticleById(articleId) {
	            return Article.findOne({
	                '_id': articleId
	            }).exec();
	        }
	    }, {
	        key: 'deleteArticle',
	        value: function deleteArticle(articleId) {
	            return Article.findOne({
	                '_id': articleId
	            }).remove().exec();
	        }
	    }, {
	        key: 'createArticle',
	        value: function createArticle(model) {

	            var newArticle = new Article({
	                title: model.title,
	                content: model.content,
	                comments: [],
	                user: {
	                    id: model.userId,
	                    name: model.userName
	                }
	            });

	            return newArticle.save();
	        }
	    }, {
	        key: 'updateArticle',
	        value: function updateArticle(model) {

	            return this.getArticleById(model.articleId).then(function (article) {
	                article.title = model.title;
	                article.content = model.content;
	                return article.save();
	            });
	        }
	    }]);

	    return ArticleService;
	}();

	module.exports = ArticleService;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var mongoose = __webpack_require__(9);
	var Schema = mongoose.Schema;

	var schema = new Schema({
	    title: {
	        type: String
	    },

	    content: {
	        type: String
	    },

	    tags: {
	        type: Array,
	        default: []
	    },

	    comments: [{
	        content: String,
	        createdDate: {
	            type: Date,
	            default: Date.now
	        },
	        user: {
	            id: String,
	            name: String
	        }
	    }],

	    createdDate: {
	        type: Date,
	        default: Date.now
	    },

	    user: {
	        id: {
	            type: String,
	            required: true
	        },
	        name: {
	            type: String,
	            required: true
	        }
	    }

	});

	exports.Article = mongoose.model('Article', schema);

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var UrlsHelper = function () {
	    function UrlsHelper() {
	        _classCallCheck(this, UrlsHelper);
	    }

	    _createClass(UrlsHelper, null, [{
	        key: 'getHomeUrl',
	        value: function getHomeUrl(protocol, host) {
	            return protocol + '://' + host + '/';
	        }
	    }, {
	        key: 'getDetailsUrl',
	        value: function getDetailsUrl(protocol, host, articleId) {
	            return protocol + '://' + host + '/articles/' + articleId;
	        }
	    }, {
	        key: 'getDeleteUrl',
	        value: function getDeleteUrl(protocol, host) {
	            return protocol + '://' + host + '/articles/delete';
	        }
	    }, {
	        key: 'getUpdateViewUrl',
	        value: function getUpdateViewUrl(protocol, host, articleId) {
	            return protocol + '://' + host + '/articles/update/' + articleId;
	        }
	    }, {
	        key: 'getUpdatePutUrl',
	        value: function getUpdatePutUrl(protocol, host) {
	            return protocol + '://' + host + '/articles/update/';
	        }
	    }, {
	        key: 'getCreateUrl',
	        value: function getCreateUrl(protocol, host) {
	            return protocol + '://' + host + '/articles/create';
	        }
	    }]);

	    return UrlsHelper;
	}();

	module.exports = UrlsHelper;

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (_ref) {
	  var body = _ref.body,
	      title = _ref.title,
	      initialState = _ref.initialState,
	      reactBundlePath = _ref.reactBundlePath;

	  return "\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <script>window.__APP_INITIAL_STATE__ = " + initialState + "</script>\n        <title>" + title + "</title>\n        <link rel='stylesheet' href='/css/layout.css' />\n        <link rel='stylesheet' href='/css/article.css' />\n        <link rel='stylesheet' href='/css/navbar.css' />\n      </head>\n\n      <body>\n        <div id=\"root\">" + body + "</div>\n      </body>\n\n     <script src=\"https://unpkg.com/axios/dist/axios.min.js\"></script>\n     <script src=\"" + reactBundlePath + "\"></script>\n     <script src=\"/js/script.js\"></script>\n    </html>\n  ";
	};

/***/ },
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BaseController = __webpack_require__(18);

	var UserService = __webpack_require__(33);
	var UrlsHelper = __webpack_require__(21);

	var UserController = function (_BaseController) {
	    _inherits(UserController, _BaseController);

	    function UserController(req, res, next) {
	        _classCallCheck(this, UserController);

	        var _this = _possibleConstructorReturn(this, (UserController.__proto__ || Object.getPrototypeOf(UserController)).call(this, req, res));

	        _this.req = req;
	        _this.res = res;
	        _this.next = next;
	        _this.userService = new UserService();
	        return _this;
	    }

	    _createClass(UserController, [{
	        key: 'login',
	        value: function login() {
	            this.renderView(this.res, 'login', {});
	        }
	    }, {
	        key: 'logout',
	        value: function logout() {
	            this.req.logout();
	            this.res.redirect('/');
	        }
	    }, {
	        key: 'createView',
	        value: function createView() {
	            this.renderView(this.res, 'createUser', {});
	        }
	    }, {
	        key: 'createAction',
	        value: function createAction(model) {
	            var _this2 = this;

	            this.userService.create(model).then(function (result) {
	                _this2.res.statusCode = 302;
	                _this2.res.setHeader("Location", "/login");
	                _this2.res.end();
	            });
	        }
	    }, {
	        key: 'renderView',
	        value: function renderView(res, templateName, data) {
	            res.render(templateName, data);
	        }
	    }]);

	    return UserController;
	}(BaseController);

	module.exports = UserController;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var User = __webpack_require__(34).User;

	var UserService = function () {
	    function UserService() {
	        _classCallCheck(this, UserService);
	    }

	    _createClass(UserService, [{
	        key: 'getUser',
	        value: function getUser(email) {
	            return User.findOne({
	                'email': email
	            }).exec();
	        }
	    }, {
	        key: 'getUserByName',
	        value: function getUserByName(name) {
	            return User.findOne({
	                'username': name
	            }).exec();
	        }
	    }, {
	        key: 'create',
	        value: function create(model) {
	            var newUser = new User({
	                username: model.username,
	                email: model.email,
	                password: model.password
	            });

	            return newUser.save();
	        }
	    }]);

	    return UserService;
	}();

	module.exports = UserService;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var crypto = __webpack_require__(35);

	var mongoose = __webpack_require__(9);
	var Schema = mongoose.Schema;

	var schema = new Schema({
	    username: {
	        type: String,
	        unique: true,
	        required: true
	    },

	    email: {
	        type: String,
	        unique: true,
	        required: true
	    },

	    hashedPassword: {
	        type: String,
	        required: true
	    },

	    salt: {
	        type: String,
	        required: true
	    },

	    created: {
	        type: Date,
	        default: Date.now
	    }
	});

	schema.methods.encryptPassword = function (password) {
	    return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
	};

	// такое поле можно установить user.set('password'); , но само приложение в базу сохраняться не будет, т.к. оно виртуальное.
	schema.virtual('password').set(function (password) {
	    this._plainPassword = password;
	    this.salt = Math.random() + '';
	    this.hashedPassword = this.encryptPassword(password);
	}).get(function () {
	    return this._plainPassword;
	});

	schema.methods.checkPassword = function (password) {
	    return this.encryptPassword(password) === this.hashedPassword;
	};

	exports.User = mongoose.model('User', schema);

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = require("crypto");

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	  init: __webpack_require__(37),
	  middleware: __webpack_require__(39)
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var passport = __webpack_require__(8);
	var LocalStrategy = __webpack_require__(38).Strategy;

	var UserService = __webpack_require__(33);
	var userService = new UserService();

	var authenticationMiddleware = __webpack_require__(39);

	function findUserByEmail(email, callback) {
	    userService.getUser(email).then(function (user) {
	        if (user) {
	            return callback(null, user);
	        }
	        return callback(null);
	    });
	}

	function findUserByName(username, callback) {
	    userService.getUserByName(username).then(function (user) {
	        if (user) {
	            return callback(null, user);
	        }
	        return callback(null);
	    });
	}

	passport.serializeUser(function (user, callback) {
	    callback(null, user.email);
	});

	passport.deserializeUser(function (username, callback) {
	    findUserByEmail(username, callback);
	});

	function initPassport() {
	    passport.use(new LocalStrategy({
	        usernameField: 'email',
	        passwordField: 'password'
	    }, function (username, password, done) {
	        findUserByEmail(username, function (err, user) {
	            if (err) {
	                return done(err);
	            }
	            if (!user) {
	                return done(null, false);
	            }
	            if (!user.checkPassword(password)) {
	                return done(null, false);
	            }
	            return done(null, user);
	        });
	    }));

	    passport.authenticationMiddleware = authenticationMiddleware;
	}

	module.exports = initPassport;

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = require("passport-local");

/***/ },
/* 39 */
/***/ function(module, exports) {

	'use strict';

	function authenticationMiddleware() {
	  return function (req, res, next) {
	    if (req.isAuthenticated()) {
	      return next();
	    }
	    res.redirect('/login');
	  };
	}

	module.exports = authenticationMiddleware;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var express = __webpack_require__(1);
	var router = express.Router();
	var ApiArticleController = __webpack_require__(41);

	/* GET /api/articles */
	router.get('/', function (req, res, next) {
	  var controller = new ApiArticleController(req, res, next);
	  controller.getAllArticles();
	});

	/* GET /api/articles/:id. */
	router.get('/:articleId', function (req, res, next) {
	  var controller = new ApiArticleController(req, res, next);
	  controller.details(req.params['articleId']);
	});

	/* POST /api/articles (create new article).
	  {
	    userId: 'currentUserId',
	    userName: 'currentUserName',
	    title: 'Article Title',
	    content: "Article Content"
	  }
	*/
	router.post('/', function (req, res, next) {
	  var controller = new ApiArticleController(req, res, next);
	  controller.createArticleAction(req.body);
	});

	/* PUT /api/articles article update.
	  {
	    articleId: 'currentArticleId',
	    title: 'Article Title',
	    content: "Article Content"
	  }
	*/
	router.put('/', function (req, res, next) {
	  var controller = new ApiArticleController(req, res, next);
	  controller.update(req.body);
	});

	/* DELETE /api/articles
	  {
	    articleId: 'currentArticleId'
	  }
	*/
	router.delete('/', function (req, res, next) {
	  var controller = new ApiArticleController(req, res, next);
	  controller.delete(req.body['articleId']);
	});

	module.exports = router;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ArticleService = __webpack_require__(19);
	var UrlsHelper = __webpack_require__(21);

	var ApiArticleController = function () {
	    function ApiArticleController(req, res, next) {
	        _classCallCheck(this, ApiArticleController);

	        this.req = req;

	        this.res = res;
	        this.res.setHeader('Content-Type', 'application/json');

	        this.next = next;
	        this.articleService = new ArticleService();
	    }

	    _createClass(ApiArticleController, [{
	        key: 'getAllArticles',
	        value: function getAllArticles() {
	            var _this = this;

	            this.articleService.getAllArticles().then(function (articles) {
	                var list = [];
	                for (var i = 0; i < articles.length; i++) {
	                    var obj = {};
	                    obj.detailArticleUrl = UrlsHelper.getDetailsUrl(_this.req.protocol, _this.req.headers.host, articles[i]._id);
	                    obj.deleteArticleUrl = UrlsHelper.getDeleteUrl(_this.req.protocol, _this.req.headers.host);
	                    obj.updateArticleUrl = UrlsHelper.getUpdateViewUrl(_this.req.protocol, _this.req.headers.host, articles[i]._id);
	                    list.push({ article: articles[i], actionUrls: obj });
	                }
	                _this.sendResult(list);
	            }).catch(function (err) {
	                _this.sendBadResult(err.stack);
	            });
	        }
	    }, {
	        key: 'details',
	        value: function details(articleId) {
	            var _this2 = this;

	            this.articleService.getArticleById(articleId).then(function (article) {
	                _this2.sendResult(article);
	            }).catch(function (err) {
	                _this2.sendBadResult(err.stack);
	            });
	        }
	    }, {
	        key: 'createArticleAction',
	        value: function createArticleAction(model) {
	            var _this3 = this;

	            this.articleService.createArticle(model).then(function (article) {
	                _this3.sendResult(article);
	            }).catch(function (err) {
	                _this3.sendBadResult(err.stack);
	            });
	        }
	    }, {
	        key: 'update',
	        value: function update(model) {
	            var _this4 = this;

	            this.articleService.updateArticle(model).then(function (data) {
	                _this4.sendResult(data);
	            }).catch(function (err) {
	                _this4.sendBadResult(err.stack);
	            });
	        }
	    }, {
	        key: 'delete',
	        value: function _delete(articleId) {
	            var _this5 = this;

	            this.articleService.deleteArticle(articleId).then(function (data) {
	                _this5.sendResult(data);
	            }).catch(function (err) {
	                _this5.sendBadResult(err.stack);
	            });
	        }
	    }, {
	        key: 'sendResult',
	        value: function sendResult(data) {
	            //this.res.send(JSON.stringify(data));
	            this.res.json(data);
	        }
	    }, {
	        key: 'sendBadResult',
	        value: function sendBadResult(errorMessage) {
	            this.res.statusCode = 400;
	            this.res.send({ message: errorMessage });
	        }
	    }]);

	    return ApiArticleController;
	}();

	module.exports = ApiArticleController;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var express = __webpack_require__(1);
	var router = express.Router();
	var UserController = __webpack_require__(32);

	router.get('/create', function (req, res, next) {
	  var controller = new UserController(req, res, next);
	  controller.createView();
	});

	router.post('/create', function (req, res, next) {
	  var controller = new UserController(req, res, next);
	  controller.createAction(req.body);
	});

	module.exports = router;

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = require("ejs-locals");

/***/ }
/******/ ]);
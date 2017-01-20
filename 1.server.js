exports.ids = [1];
exports.modules = {

/***/ 23:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(16);

	var _react2 = _interopRequireDefault(_react);

	var _Header = __webpack_require__(24);

	var _Header2 = _interopRequireDefault(_Header);

	var _TopNavigation = __webpack_require__(25);

	var _TopNavigation2 = _interopRequireDefault(_TopNavigation);

	var _ArticleList = __webpack_require__(27);

	var _ArticleList2 = _interopRequireDefault(_ArticleList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Index = function (_React$Component) {
	    _inherits(Index, _React$Component);

	    function Index(props) {
	        _classCallCheck(this, Index);

	        return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
	    }

	    _createClass(Index, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                user = _props.user,
	                articles = _props.articles,
	                createNewArticleUrl = _props.createNewArticleUrl;


	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_Header2.default, { user: user }),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'content-container' },
	                    _react2.default.createElement(_TopNavigation2.default, { user: user }),
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'content', 'class': 'content-container' },
	                        _react2.default.createElement(_ArticleList2.default, {
	                            articles: articles,
	                            user: user,
	                            createNewArticleUrl: createNewArticleUrl
	                        })
	                    )
	                )
	            );
	        }
	    }]);

	    return Index;
	}(_react2.default.Component);

	exports.default = Index;

/***/ },

/***/ 24:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(16);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Header = function (_React$Component) {
	    _inherits(Header, _React$Component);

	    function Header(props) {
	        _classCallCheck(this, Header);

	        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
	    }

	    _createClass(Header, [{
	        key: "render",
	        value: function render() {
	            var user = this.props.user;


	            return _react2.default.createElement(
	                "div",
	                { className: "header-container" },
	                _react2.default.createElement(
	                    "div",
	                    { className: "wrapper" },
	                    _react2.default.createElement(
	                        "div",
	                        { className: "header-content" },
	                        _react2.default.createElement(
	                            "div",
	                            { className: "logo" },
	                            _react2.default.createElement(
	                                "a",
	                                { href: "https://nodejs.org/" },
	                                "Powered by NodeJs and React"
	                            )
	                        )
	                    ),
	                    user ? _react2.default.createElement(
	                        "div",
	                        { className: "welcome-user" },
	                        "Welcome, ",
	                        user
	                    ) : ''
	                )
	            );
	        }
	    }]);

	    return Header;
	}(_react2.default.Component);

	exports.default = Header;

/***/ },

/***/ 25:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(16);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(26);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TopNavigation = function (_React$Component) {
	    _inherits(TopNavigation, _React$Component);

	    function TopNavigation(props) {
	        _classCallCheck(this, TopNavigation);

	        return _possibleConstructorReturn(this, (TopNavigation.__proto__ || Object.getPrototypeOf(TopNavigation)).call(this, props));
	    }

	    _createClass(TopNavigation, [{
	        key: 'render',
	        value: function render() {
	            var user = this.props.user;


	            return _react2.default.createElement(
	                'nav',
	                { className: 'navbar', role: 'navigation' },
	                _react2.default.createElement(
	                    'ul',
	                    { className: 'nav navbar-nav' },
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                            'a',
	                            { href: '/' },
	                            'Home'
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'ul',
	                    { className: 'nav navbar-nav navbar-right' },
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        user ? _react2.default.createElement(
	                            'a',
	                            { href: '/logout' },
	                            'Log Out'
	                        ) : _react2.default.createElement(
	                            'a',
	                            { href: '/login' },
	                            'Log In'
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return TopNavigation;
	}(_react2.default.Component);

	exports.default = TopNavigation;

/***/ },

/***/ 26:
/***/ function(module, exports) {

	module.exports = require("classnames");

/***/ },

/***/ 27:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(16);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(26);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Article = __webpack_require__(28);

	var _Article2 = _interopRequireDefault(_Article);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ArticleList = function (_React$Component) {
	    _inherits(ArticleList, _React$Component);

	    function ArticleList() {
	        _classCallCheck(this, ArticleList);

	        return _possibleConstructorReturn(this, (ArticleList.__proto__ || Object.getPrototypeOf(ArticleList)).apply(this, arguments));
	    }

	    _createClass(ArticleList, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                articles = _props.articles,
	                user = _props.user,
	                createNewArticleUrl = _props.createNewArticleUrl;


	            console.log(createNewArticleUrl);

	            var articlesComponents = articles.map(function (data) {
	                return _react2.default.createElement(_Article2.default, {
	                    key: data.article._id,
	                    article: data.article,
	                    deleteArticleUrl: data.actionUrls.deleteArticleUrl,
	                    updateArticleUrl: data.actionUrls.updateArticleUrl,
	                    detailArticleUrl: data.actionUrls.detailArticleUrl,
	                    user: user
	                });
	            });

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { className: 'create-btn' },
	                    _react2.default.createElement(
	                        'a',
	                        { className: 'create-link', href: createNewArticleUrl },
	                        'Create New'
	                    )
	                ),
	                articlesComponents
	            );
	        }
	    }]);

	    return ArticleList;
	}(_react2.default.Component);

	exports.default = ArticleList;

/***/ },

/***/ 28:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(16);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(26);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Article = function (_React$Component) {
	    _inherits(Article, _React$Component);

	    function Article(props) {
	        _classCallCheck(this, Article);

	        return _possibleConstructorReturn(this, (Article.__proto__ || Object.getPrototypeOf(Article)).call(this, props));
	    }

	    _createClass(Article, [{
	        key: 'deleteArticle',
	        value: function deleteArticle(url, article) {
	            axios({
	                method: 'delete',
	                url: url,
	                data: {
	                    articleId: article._id
	                }
	            }).then(function (response) {
	                window.location = response.data.redirectUrl;
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props,
	                article = _props.article,
	                deleteArticleUrl = _props.deleteArticleUrl,
	                updateArticleUrl = _props.updateArticleUrl,
	                detailArticleUrl = _props.detailArticleUrl,
	                user = _props.user;


	            var actions = user ? _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'a',
	                        { className: 'delete-article', href: '#', onClick: function onClick(e) {
	                                e.preventDefault();
	                                _this2.deleteArticle(deleteArticleUrl, article);
	                            } },
	                        'Remove'
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'a',
	                        { className: 'update-article', href: updateArticleUrl },
	                        'Update'
	                    )
	                )
	            ) : '';

	            return _react2.default.createElement(
	                'div',
	                { className: 'article-container' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'body' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'image' },
	                        actions,
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'floater' },
	                            _react2.default.createElement(
	                                'a',
	                                { href: 'http://www.abc.net.au/news/2016-12-28/australia-pakistan-mcg-second-test-day-three/8151468',
	                                    target: '_blank' },
	                                _react2.default.createElement('img', { src: 'http://www.abc.net.au/news/image/8151536-1x1-700x700.jpg' })
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'title' },
	                        _react2.default.createElement(
	                            'a',
	                            { href: detailArticleUrl },
	                            article.title
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'author' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'author' },
	                            article.user.name
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'description' },
	                        article.content
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'publish-at' },
	                        _react2.default.createElement(
	                            'div',
	                            null,
	                            article.createdDate.toString()
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Article;
	}(_react2.default.Component);

	exports.default = Article;

/***/ }

};;
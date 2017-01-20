exports.ids = [3];
exports.modules = {

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

/***/ 30:
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

	var _Form = __webpack_require__(31);

	var _Form2 = _interopRequireDefault(_Form);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CreateUpdateArticle = function (_React$Component) {
	    _inherits(CreateUpdateArticle, _React$Component);

	    function CreateUpdateArticle(props) {
	        _classCallCheck(this, CreateUpdateArticle);

	        return _possibleConstructorReturn(this, (CreateUpdateArticle.__proto__ || Object.getPrototypeOf(CreateUpdateArticle)).call(this, props));
	    }

	    _createClass(CreateUpdateArticle, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                actionUrl = _props.actionUrl,
	                articleId = _props.articleId,
	                title = _props.title,
	                content = _props.content,
	                userId = _props.userId,
	                userName = _props.userName,
	                btnText = _props.btnText,
	                authUserName = _props.authUserName;


	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_Header2.default, { user: authUserName }),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'content-container' },
	                    _react2.default.createElement(_TopNavigation2.default, { user: authUserName }),
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'content', 'class': 'content-container' },
	                        _react2.default.createElement(_Form2.default, {
	                            actionUrl: actionUrl,
	                            articleId: articleId,
	                            title: title,
	                            content: content,
	                            userId: userId,
	                            userName: userName,
	                            btnText: btnText
	                        })
	                    )
	                )
	            );
	        }
	    }]);

	    return CreateUpdateArticle;
	}(_react2.default.Component);

	exports.default = CreateUpdateArticle;

/***/ },

/***/ 31:
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

	var Form = function (_React$Component) {
	    _inherits(Form, _React$Component);

	    function Form(props) {
	        _classCallCheck(this, Form);

	        return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));
	    }

	    _createClass(Form, [{
	        key: 'submit',
	        value: function submit(url, article) {
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
	            var _props = this.props,
	                actionUrl = _props.actionUrl,
	                articleId = _props.articleId,
	                title = _props.title,
	                content = _props.content,
	                userId = _props.userId,
	                userName = _props.userName,
	                btnText = _props.btnText;


	            return _react2.default.createElement(
	                'div',
	                { className: 'article-container' },
	                _react2.default.createElement(
	                    'form',
	                    { action: actionUrl, method: 'post' },
	                    _react2.default.createElement('input', { type: 'hidden', name: 'articleId', value: articleId }),
	                    _react2.default.createElement('input', { type: 'hidden', name: 'userId', value: userId }),
	                    _react2.default.createElement('input', { type: 'hidden', name: 'userName', value: userName }),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'author' },
	                        'Title:'
	                    ),
	                    _react2.default.createElement('input', { type: 'text', name: 'title', value: title }),
	                    _react2.default.createElement('br', null),
	                    'Article Content:',
	                    _react2.default.createElement('br', null),
	                    _react2.default.createElement(
	                        'textarea',
	                        { rows: '4', cols: '50', type: 'text', name: 'content' },
	                        content
	                    ),
	                    _react2.default.createElement('br', null),
	                    _react2.default.createElement('input', { className: 'create-btn', type: 'submit', value: btnText })
	                )
	            );
	        }
	    }]);

	    return Form;
	}(_react2.default.Component);

	exports.default = Form;

/***/ }

};;
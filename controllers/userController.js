var BaseController = require('./baseController');

var UserService = require('../services/userService');
var UrlsHelper = require('../helpers/urlsHelper');

class UserController extends BaseController {
    constructor(req, res, next) {
        super(req, res);

        this.req = req;
        this.res = res;
        this.next = next;
        this.userService = new UserService();
    }

    login() {
        this.renderView(this.res, 'login', {});
    }

    logout() {
        this.req.logout();
        this.res.redirect('/');
    }

    createView() {
        this.renderView(this.res, 'createUser', {});
    }

    createAction(model) {
        this.userService.create(model).then((result) => {
            this.res.statusCode = 302;
            this.res.setHeader("Location", "/login");
            this.res.end();
        });
    }

    renderView(res, templateName, data) {
        res.render(templateName, data);
    }
}

module.exports = UserController;

class BaseController {
    constructor(req, res) {
        res.locals.user = req.user;
    }
}

module.exports = BaseController;

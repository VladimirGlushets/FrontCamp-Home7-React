var User = require('../models/user').User;

class UserService {
    constructor() {}

    getUser(email) {
        return User.findOne({
            'email': email
        }).exec();
    }

    getUserByName(name) {
        return User.findOne({
            'username': name
        }).exec();
    }

    create(model) {
        var newUser = new User({
            username: model.username,
            email: model.email,
            password: model.password
        });

        return newUser.save();
    }
}

module.exports = UserService;

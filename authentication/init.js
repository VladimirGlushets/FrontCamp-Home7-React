const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

var UserService = require('../services/userService');
var userService = new UserService();

const authenticationMiddleware = require('./middleware');

function findUserByEmail(email, callback) {
    userService.getUser(email).then((user) => {
        if (user) {
            return callback(null, user);
        }
        return callback(null);
    });
}

function findUserByName(username, callback) {
    userService.getUserByName(username).then((user) => {
        if (user) {
            return callback(null, user);
        }
        return callback(null);
    });
}

passport.serializeUser(function(user, callback) {
    callback(null, user.email);
})

passport.deserializeUser(function(username, callback) {
    findUserByEmail(username, callback);
})

function initPassport() {
    passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password'
        },
        function(username, password, done) {
            findUserByEmail(username, function(err, user) {
                if (err) {
                    return done(err)
                }
                if (!user) {
                    return done(null, false)
                }
                if (!user.checkPassword(password)) {
                    return done(null, false)
                }
                return done(null, user)
            })
        }
    ))

    passport.authenticationMiddleware = authenticationMiddleware;
}

module.exports = initPassport;

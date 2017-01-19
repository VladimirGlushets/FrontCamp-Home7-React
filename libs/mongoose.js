var mongoose = require('mongoose');
var config = require('../config');

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://nodetest:nodetest@ds135818.mlab.com:35818/heroku_c694rvx3/postdb", config.get('mongoose:options'));

module.exports = mongoose;

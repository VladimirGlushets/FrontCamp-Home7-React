var mongoose = require('../libs/mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    value: {
        type: String
    },

    articles_ids: {
        type: Array,
        default: []
    }
});

exports.Tag = mongoose.model('Tag', schema);

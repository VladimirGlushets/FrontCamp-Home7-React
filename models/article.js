var mongoose = require('../libs/mongoose');
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

class UrlsHelper {

    constructor() {}

    static getHomeUrl(protocol, host) {
        return protocol + '://' + host + '/';
    }

    static getDetailsUrl(protocol, host, articleId) {
        return protocol + '://' + host + '/articles/' + articleId;
    }

    static getDeleteUrl(protocol, host) {
        return protocol + '://' + host + '/articles/delete';
    }

    static getUpdateViewUrl(protocol, host, articleId) {
        return protocol + '://' + host + '/articles/update/' + articleId;
    }

    static getUpdatePutUrl(protocol, host) {
        return protocol + '://' + host + '/articles/update/';
    }

    static getCreateUrl(protocol, host) {
        return protocol + '://' + host + '/articles/create';
    }

}

module.exports = UrlsHelper;

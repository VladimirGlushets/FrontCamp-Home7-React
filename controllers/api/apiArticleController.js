var ArticleService = require('../../services/articleService');
var UrlsHelper = require('../../helpers/urlsHelper');

class ApiArticleController {
    constructor(req, res, next) {
        this.req = req;

        this.res = res;
        this.res.setHeader('Content-Type', 'application/json');

        this.next = next;
        this.articleService = new ArticleService();
    }

    getAllArticles() {
        this.articleService.getAllArticles().then((articles) => {
            var list = [];
            for (var i = 0; i < articles.length; i++) {
                var obj = {};
                obj.detailArticleUrl = UrlsHelper.getDetailsUrl(this.req.protocol, this.req.headers.host, articles[i]._id);
                obj.deleteArticleUrl = UrlsHelper.getDeleteUrl(this.req.protocol, this.req.headers.host);
                obj.updateArticleUrl = UrlsHelper.getUpdateViewUrl(this.req.protocol, this.req.headers.host, articles[i]._id);
                list.push({article: articles[i], actionUrls: obj});
            }            
            this.sendResult(list);
        }).catch((err) => {
            this.sendBadResult(err.stack);
        });
    }

    details(articleId) {
        this.articleService.getArticleById(articleId).then((article) => {
            this.sendResult(article);
        }).catch((err) => {
            this.sendBadResult(err.stack);
        });
    }

    createArticleAction(model) {
        this.articleService.createArticle(model).then((article) => {
            this.sendResult(article);
        }).catch((err) => {
            this.sendBadResult(err.stack);
        });
    }

    update(model) {
        this.articleService.updateArticle(model).then((data) => {
            this.sendResult(data);
        }).catch((err) => {
            this.sendBadResult(err.stack);
        });
    }

    delete(articleId) {
        this.articleService.deleteArticle(articleId).then((data) => {
            this.sendResult(data);
        }).catch((err) => {
            this.sendBadResult(err.stack);
        });
    }

    sendResult(data) {
        //this.res.send(JSON.stringify(data));
        this.res.json(data);
    }

    sendBadResult(errorMessage) {
        this.res.statusCode = 400;
        this.res.send({ message: errorMessage });
    }
}

module.exports = ApiArticleController;

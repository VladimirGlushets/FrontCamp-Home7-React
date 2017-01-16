var BaseController = require('./baseController');
var ArticleService = require('../services/articleService');
var UrlsHelper = require('../helpers/urlsHelper');

class ArticleController extends BaseController  {
    constructor(req, res, next) {
        super(req, res);

        this.req = req;
        this.res = res;
        this.next = next;
        this.articleService = new ArticleService();
    }

    index() {
        this.articleService.getAllArticles().then((articles) => {

                for (var i = 0; i < articles.length; i++) {
                    articles[i].detailArticleUrl = UrlsHelper.getDetailsUrl(this.req.protocol, this.req.headers.host, articles[i]._id);
                    articles[i].deleteArticleUrl = UrlsHelper.getDeleteUrl(this.req.protocol, this.req.headers.host);
                    articles[i].updateArticleUrl = UrlsHelper.getUpdateViewUrl(this.req.protocol, this.req.headers.host, articles[i]._id);
                }

                var renderData = {
                    createNewArticleUrl: UrlsHelper.getCreateUrl(this.req.protocol, this.req.headers.host),
                    articles: articles
                }

                this.renderView(this.res, 'articles', renderData);
            },
            function(err) {
                throw err;
            }
        );
    }

    details(articleId) {

        this.articleService.getArticleById(articleId).then((article) => {
                var renderData = {
                    article: article,
                    deleteArticleUrl: UrlsHelper.getDeleteUrl(this.req.protocol, this.req.headers.host),
                    updateArticleUrl: UrlsHelper.getUpdateViewUrl(this.req.protocol, this.req.headers.host, article._id)
                }

                this.renderView(this.res, 'articleDetails', renderData);
            },
            function(err) {
                throw err;
            }
        );
    }

    delete(articleId) {
        this.articleService.deleteArticle(articleId).then((result) => {
                this.res.send({
                    result: result,
                    redirectUrl: UrlsHelper.getHomeUrl(this.req.protocol, this.req.headers.host)
                });
            },
            function(err) {
                throw err;
            }
        );
    }

    createArticleView(articleId) {
        var renderData = {};

        if (articleId) {
            this.articleService.getArticleById(articleId).then((article) => {
                renderData.actionUrl = UrlsHelper.getUpdatePutUrl(this.req.protocol, this.req.headers.host);
                renderData.articleId = article._id;
                renderData.title = article.title;
                renderData.content = article.content;
                renderData.userId = article.user.id;
                renderData.userName = article.user.name;

                this.renderView(this.res, 'createUpdateArticle', renderData);
            });

        } else {
            renderData.actionUrl = UrlsHelper.getCreateUrl(this.req.protocol, this.req.headers.host);
            renderData.articleId = '';
            renderData.title = '';
            renderData.content = '';
            renderData.userId = this.req.user._id;
            renderData.userName = this.req.user.username;

            this.renderView(this.res, 'createUpdateArticle', renderData);
        }
    }

    createArticleAction(model) {

        this.articleService.createArticle(model).then((article) => {
                this.res.statusCode = 302;
                this.res.setHeader("Location", "/");
                this.res.end();
            },
            function(err) {
                throw err;
            }
        );
    }

    update(model) {
        this.articleService.updateArticle(model).then((result) => {
            this.res.statusCode = 302;
            this.res.setHeader("Location", "/");
            this.res.end();
        });
    }

    renderView(res, templateName, data) {
        res.render(templateName, data);
    }
}

module.exports = ArticleController;

var React = require('react');
var ReactDOMServer = require('react-dom/server');

var BaseController = require('./baseController');
var ArticleService = require('../services/articleService');
var UrlsHelper = require('../helpers/urlsHelper');
var layout = require('../templates/layout/reactLayout');

import Index from '../public/js/Pages/Index';


class ArticleController extends BaseController {
    constructor(req, res, next) {
        super(req, res);

        this.req = req;
        this.res = res;
        this.next = next;
        this.articleService = new ArticleService();
    }

    index() {
        let user;
        if (this.req.user) {
            user = this.req.user.username;
        }

        require(["../public/js/Pages/Index"],
            (Index) => {
                this.articleService.getAllArticles().then((data) => {
                    if (!data) {
                        console.log(data);
                    } else {
                        var articles = [];
                        for (var i = 0; i < data.length; i++) {
                            var obj = {};
                            obj.detailArticleUrl = UrlsHelper.getDetailsUrl(this.req.protocol, this.req.headers.host, data[i]._id);
                            obj.deleteArticleUrl = UrlsHelper.getDeleteUrl(this.req.protocol, this.req.headers.host);
                            obj.updateArticleUrl = UrlsHelper.getUpdateViewUrl(this.req.protocol, this.req.headers.host, data[i]._id);
                            articles.push({article: data[i], actionUrls: obj});
                        }

                        const initialState = { user, articles };
                        var Component = Index.default;
                        let renderedString = ReactDOMServer.renderToString(<Component {...initialState} />);
                        this.renderViewReact(this.res, 'Articles', renderedString, initialState);
                    }
                }).catch((err) => {
                    console.log(err);
                });
            });
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
            function (err) {
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
            function (err) {
                throw err;
            }
        );
    }

    createArticleView(articleId) {
        console.log("????");
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
            function (err) {
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

    renderViewReact(res, title, renderedString, initialState) {
        res.send(layout({
            body: renderedString,
            title: title,
            initialState: JSON.stringify(initialState)
        }));
    }

    renderView(res, templateName, data) {
        res.render(templateName, data);
    }
}

module.exports = ArticleController;

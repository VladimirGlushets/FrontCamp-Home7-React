var React = require('react');
var ReactDOMServer = require('react-dom/server');

var BaseController = require('./baseController');
var ArticleService = require('../services/articleService');
var UrlsHelper = require('../helpers/urlsHelper');
var layout = require('../templates/layout/reactLayout');

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
                        let createNewArticleUrl = UrlsHelper.getCreateUrl(this.req.protocol, this.req.headers.host);
                        const initialState = { user, articles, createNewArticleUrl };
                        var Component = Index.default;
                        let renderedString = ReactDOMServer.renderToString(<Component {...initialState} />);
                        this.renderViewReact(this.res, 'Articles', renderedString, initialState, '../build/articlesBundle.js');
                    }
                }).catch((err) => {
                    console.log(err);
                });
            });
    }

    details(articleId) {
      let user;
          if (this.req.user) {
              user = this.req.user.username;
          }

      require(["../public/js/Pages/Details"],
          (Details) => {
              this.articleService.getArticleById(articleId).then((article) => {
                  if (!article) {
                      console.log(article);
                  } else {

                      let deleteArticleUrl = UrlsHelper.getDeleteUrl(this.req.protocol, this.req.headers.host);
                      let updateArticleUrl = UrlsHelper.getUpdateViewUrl(this.req.protocol, this.req.headers.host, article._id);

                      const initialState = { user, article, deleteArticleUrl, updateArticleUrl };
                      var Component = Details.default;
                      let renderedString = ReactDOMServer.renderToString(<Component {...initialState} />);
                      this.renderViewReact(this.res, 'Article Details', renderedString, initialState, '../build/detailsBundle.js');
                  }
              }).catch((err) => {
                  console.log(err);
              });
          });
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

      require(["../public/js/Pages/CreateUpdateArticle"],
          (CreateUpdateArticle) => {
            if (articleId) {
                this.articleService.getArticleById(articleId).then((article) => {
                  if (!article) {
                      console.log(article);
                  } else {

                    let actionUrl = UrlsHelper.getUpdatePutUrl(this.req.protocol, this.req.headers.host);
                    let articleId = article._id;
                    let title = article.title;
                    let content = article.content;
                    let userId = article.user.id;
                    let userName = article.user.name;
                    let authUserName = this.req.user.username;
                    let btnText = "Update";

                    const initialState = { actionUrl, articleId, title, content, userId, userName, btnText, authUserName };
                    var Component = CreateUpdateArticle.default;
                    let renderedString = ReactDOMServer.renderToString(<Component {...initialState} />);
                    this.renderViewReact(this.res, 'Update Article', renderedString, initialState, '');
                  }
                }).catch((err) => {
                    console.log(err);
                });

            } else {

                let actionUrl = UrlsHelper.getCreateUrl(this.req.protocol, this.req.headers.host);
                let articleId = '';
                let title = '';
                let content = '';
                let userId = this.req.user._id;
                let userName = this.req.user.username;
                let authUserName = this.req.user.username;
                let btnText = "Create";

                const initialState = { actionUrl, articleId, title, content, userId, userName, btnText, authUserName };
                var Component = CreateUpdateArticle.default;
                let renderedString = ReactDOMServer.renderToString(<Component {...initialState} />);
                this.renderViewReact(this.res, 'Create Article', renderedString, initialState, '');
            }
          }
        );
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

    renderViewReact(res, title, renderedString, initialState, reactBundlePath) {
        res.send(layout({
            body: renderedString,
            title: title,
            initialState: JSON.stringify(initialState),
            reactBundlePath: reactBundlePath
        }));
    }

    renderView(res, templateName, data) {
        res.render(templateName, data);
    }
}

module.exports = ArticleController;

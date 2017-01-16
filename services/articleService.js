var Article = require('../models/article').Article;

class ArticleService {
    constructor() {}

    getAllArticles() {
        return Article.find({}).exec();
    }

    getArticleById(articleId) {
        return Article.findOne({
            '_id': articleId
        }).exec();
    }

    deleteArticle(articleId) {
        return Article.findOne({
            '_id': articleId
        }).remove().exec();
    }

    createArticle(model) {

        var newArticle = new Article({
            title: model.title,
            content: model.content,
            comments: [],
            user: {
                id: model.userId,
                name: model.userName
            }
        });

        return newArticle.save();
    }

    updateArticle(model) {

        return this.getArticleById(model.articleId).then((article) => {
            article.title = model.title;
            article.content = model.content;
            return article.save();
        });
    }
}

module.exports = ArticleService;

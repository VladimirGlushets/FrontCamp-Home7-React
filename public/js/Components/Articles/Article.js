import React from 'react';
import classNames from 'classnames';

export default class Article extends React.Component {
    constructor(props) {
        super(props);
    }

    deleteArticle(url, article) {
        axios({
            method: 'delete',
            url: url,
            data: {
                articleId: article._id
            }
        }).then(
            function (response) {
                window.location = response.data.redirectUrl;
            }
        );
    }

    render() {
        let { article, actionUrls, user } = this.props;

        console.log(article);
        console.log(actionUrls);
        let actions = user ? (
            <div>
                <div><a className="delete-article" href='#' onClick={(e) =>
                {
                    e.preventDefault();
                    this.deleteArticle(actionUrls.deleteArticleUrl, article)
                }
                    }>Remove</a>
                </div>
                <div>
                    <a className="update-article" href={actionUrls.updateArticleUrl}>Update</a>
                </div>
            </div>
        ) : '';

        return (
            <div className="article-container">
                <div className="body">
                    <div className="image">
                        {actions}
                        <div className="floater">
                            <a href="http://www.abc.net.au/news/2016-12-28/australia-pakistan-mcg-second-test-day-three/8151468"
                               target="_blank">
                                <img src="http://www.abc.net.au/news/image/8151536-1x1-700x700.jpg"/>
                            </a>
                        </div>
                    </div>
                    <div className="title">
                        <a href={actionUrls.detailArticleUrl}>
                            {article.title}
                        </a>
                    </div>
                    <div className="author">
                        <div className="author">
                            {article.user.name}
                        </div>
                    </div>
                    <div className="description">
                        {article.content}
                    </div>
                    <div className="publish-at">
                        <div>
                            {article.createdDate.toString()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

//return (
//    <div className="article-container">
//        <div className="body">
//            <div className="image">
//                {actions}
//                <div className="floater">
//                    <a href="http://www.abc.net.au/news/2016-12-28/australia-pakistan-mcg-second-test-day-three/8151468"
//                       target="_blank">
//                        <img src="http://www.abc.net.au/news/image/8151536-1x1-700x700.jpg"/>
//                    </a>
//                </div>
//            </div>
//            <div className="title">
//                <a href={actionUrls.detailArticleUrl}>
//                    {article.title}
//                </a>
//            </div>
//            <div className="author">
//                {article.user.name}
//            </div>
//            <div className="description">
//                {article.content}
//            </div>
//            <div className="publish-at">
//                {article.createdDate}
//            </div>
//        </div>
//    </div>
//);
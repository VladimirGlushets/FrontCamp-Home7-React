import React from 'react';
import classNames from 'classnames';
import UrlConstants from '../../Constants/UrlConstants'
import Article from './Article';

export default class ArticleList extends React.Component {

    render() {
        let { articles, user } = this.props;

        let articlesComponents = articles.map((data) => {
            return (<Article
                key={data.article._id}
                article={data.article}
                deleteArticleUrl={data.actionUrls.deleteArticleUrl}
                updateArticleUrl={data.actionUrls.updateArticleUrl}
                detailArticleUrl={data.actionUrls.detailArticleUrl}
                user={user}
            />)
        });

        return (
            <div>
                <div className="create-btn">
                    <a className="create-link" href={UrlConstants.CreateNewArticleUrl}>Create New</a>
                </div>
                {articlesComponents}
            </div>
        );
    }
}

import React from 'react';
import classNames from 'classnames';
import UrlConstants from '../../Constants/UrlConstants'
import Article from './Article';

export default class ArticleList extends React.Component {

    render() {
        let { articles } = this.props;

        let articlesComponents = articles.map((data) => (
            <Article
                article={data.article}
                actionUrls={data.actionUrls}
            />
        ));
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

//this.props
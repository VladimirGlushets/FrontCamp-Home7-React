import React from 'react';
import classNames from 'classnames';
import Article from './Article';

export default class ArticleList extends React.Component {

    render() {
        let { articles, user, createNewArticleUrl } = this.props;

        console.log(createNewArticleUrl);

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
                    <a className="create-link" href={createNewArticleUrl}>Create New</a>
                </div>
                {articlesComponents}
            </div>
        );
    }
}

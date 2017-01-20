import React from 'react';

import Header from '../Components/Header/Header';
import TopNavigation from '../Components/Menu/TopNavigation';
import Article from '../Components/Articles/Article';

export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { user, article, deleteArticleUrl, updateArticleUrl, detailArticleUrl } = this.props;

        return (
            <div>
                <Header user={user}/>
                <div className="content-container">
                    <TopNavigation user={user}/>
                    <div id="content" class="content-container">
                        <Article
                          article={article}
                          deleteArticleUrl={deleteArticleUrl}
                          updateArticleUrl={updateArticleUrl}
                          detailArticleUrl={detailArticleUrl}
                          user={user}
                          />
                    </div>
                </div>
            </div>
        );
    }
}

import React from 'react';

import Header from '../Components/Header/Header';
import TopNavigation from '../Components/Menu/TopNavigation';
import ArticleList from '../Components/Articles/ArticleList';

export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { user, articles, createNewArticleUrl } = this.props;

        return (
            <div>
                <Header user={user}/>
                <div className="content-container">
                    <TopNavigation user={user}/>
                    <div id="content" class="content-container">
                        <ArticleList
                          articles={articles}
                          user={user}
                          createNewArticleUrl={createNewArticleUrl}
                          />
                    </div>
                </div>
            </div>
        );
    }
}

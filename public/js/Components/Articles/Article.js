import React from 'react';

export default class Article extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let {
            article,
            actionUrls
            } = this.props;
        return(
            <div className="article-container">
                <div className="body">
                    <div className="image">
                        <div>
                            <a className="delete-article" href={actionUrls.deleteArticleUrl} data-id={article._id}>Remove</a>
                        </div>
                        <div>
                            <a className="update-article" href={actionUrls.updateArticleUrl}>Update</a>
                        </div>
                        <div className="floater">
                            <a href="http://www.abc.net.au/news/2016-12-28/australia-pakistan-mcg-second-test-day-three/8151468" target="_blank">
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
                        {article.user.name}
                    </div>
                    <div className="description">
                        {article.content}
                    </div>
                    <div className="publish-at">
                        {article.createdDate}
                    </div>
                </div>
            </div>

        );
    }
}
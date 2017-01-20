import React from 'react';

import Header from '../Components/Header/Header';
import TopNavigation from '../Components/Menu/TopNavigation';
import Form from '../Components/Controls/Form';

export default class CreateUpdateArticle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { actionUrl, articleId, title, content, userId, userName, btnText, authUserName } = this.props;        

        return (
            <div>
                <Header user={authUserName}/>
                <div className="content-container">
                    <TopNavigation user={authUserName}/>
                    <div id="content" class="content-container">
                        <Form
                          actionUrl={actionUrl}
                          articleId={articleId}
                          title={title}
                          content={content}
                          userId={userId}
                          userName={userName}
                          btnText={btnText}
                          />
                    </div>
                </div>
            </div>
        );
    }
}

import React from 'react';
import classNames from 'classnames';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    submit(url, article) {
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

        let { actionUrl, articleId, title, content, userId, userName, btnText } = this.props;

        return (
          <div className="article-container">
              <form action={actionUrl} method="post">
                  <input type="hidden" name='articleId' value={articleId} />
                  <input type="hidden" name='userId' value={userId} />
                  <input type="hidden" name='userName' value={userName} />
                  <div className="author">
                     Title:
                   </div>
                  <input type="text" name="title" value={title} /><br />
                  Article Content:<br />
                  <textarea rows="4" cols="50" type="text" name="content">{content}</textarea><br />

                  <input className="create-btn" type="submit" value={btnText} />
              </form>
          </div>
        );
    }
}

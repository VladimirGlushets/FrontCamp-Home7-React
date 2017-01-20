import React from 'react';
import ReactDOM from 'react-dom';
import ArticleList from '../Components/Articles/ArticleList';

var renderContainer = document.getElementById('content');
if(renderContainer){
  ReactDOM.render(<ArticleList
    articles={ __APP_INITIAL_STATE__.articles }
    user={ __APP_INITIAL_STATE__.user }
    createNewArticleUrl={ __APP_INITIAL_STATE__.createNewArticleUrl }
    />, renderContainer);
}

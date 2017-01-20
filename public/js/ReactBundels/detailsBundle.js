import React from 'react';
import ReactDOM from 'react-dom';
import Article from '../Components/Articles/Article';

var renderContainer = document.getElementById('content');
if(renderContainer){
  ReactDOM.render(<Article
      article={__APP_INITIAL_STATE__.article}
      deleteArticleUrl={__APP_INITIAL_STATE__.deleteArticleUrl}
      updateArticleUrl={__APP_INITIAL_STATE__.updateArticleUrl}
      detailArticleUrl={__APP_INITIAL_STATE__.detailArticleUrl}
      user={__APP_INITIAL_STATE__.user}
     />, renderContainer);
}

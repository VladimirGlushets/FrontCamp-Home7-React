import React from 'react';
import ReactDOM from 'react-dom';
import DataService from './Services/DataService';
import ArticleList from './Components/Articles/ArticleList';

var dataService = new DataService();

dataService.getAllArticles().then((data) => {
    if (!data) {
        console.log(data);
    } else {
      var renderContainer = document.getElementById('react-root');
      var user = renderContainer.dataset.user;
      ReactDOM.render(<ArticleList articles={data} user={user}/>, renderContainer);
    }
}).catch((err) => {
    console.log(err);
});

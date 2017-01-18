import React from 'react';
import ReactDOM from 'react-dom';
import DataService from './Services/DataService';
import ArticleList from './Components/Articles/ArticleList';

var dataService = new DataService();

dataService.getAllArticles().then((data) => {
    if (!data) {
        console.log(data);
    } else {
        ReactDOM.render(<ArticleList articles={data}/>, document.getElementById('react-root'));
    }
}).catch((err) => {
    console.log(err);
});


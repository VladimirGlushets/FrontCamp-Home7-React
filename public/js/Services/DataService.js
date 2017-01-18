import UrlConstants from '../Constants/UrlConstants'

export default class DataService{
    getAllArticles() {
        return axios.get(UrlConstants.SourceArticlesUrl).then((response) => {
                if (response.status != 200) {
                    console.log(response);
                } else {
                    return response.data;
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
}


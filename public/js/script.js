var deleteBtns = document.getElementsByClassName("delete-article");

if (deleteBtns && deleteBtns.length > 0) {
    for (var i = 0; i < deleteBtns.length; i++) {
        deleteBtns[i].addEventListener("click", function(e) {
            e.preventDefault();
            var id = this.dataset.id;
            var url = this.href;

            axios({
                method: 'delete',
                url: url,
                data: {
                    articleId: id
                }
            }).then(
                function(response) {
                  window.location = response.data.redirectUrl;                    
                }
            );

        }, false);
    }
}

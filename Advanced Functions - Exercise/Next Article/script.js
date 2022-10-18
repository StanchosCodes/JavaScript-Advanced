function getArticleGenerator(articles) {
    let copyArticles = Array.from(articles);
    let outputField = document.getElementById('content');

    return () => {
        if (copyArticles.length === 0) {
            return;
        }
        let currArticle = copyArticles.shift();

        outputField.innerHTML += `<article>${currArticle}</article>`;
    }
}
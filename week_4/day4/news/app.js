const contentDiv = document.getElementById('content')
const newsContent = news.articles
const contentRow = document.getElementById('row')


function getNews(newsContent) {
    newsContent.map((article) => {
        let newsCard = `<div class="col-sm">
        <div class="card">
            <img src="${article.urlToImage}" class="card-img-top" alt="URL">
            <div class="card-body">
              <h5 class="card-title">${article.title}</h5>
              <p class="card-text">${article.description}</p>
              <a href="${article.url}" class="btn btn-primary" target='_blank'>Link to Article</a>
            </div>
          </div>
      </div>`
        contentDiv.innerHTML += newsCard
    })
}

getNews(newsContent)
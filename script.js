const apiKey = process.env.NEWS_API_KEY;
let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`


async function fetchNews(){
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        displayNews(data.articles);
    }
    catch(error){
        console.log('There was an error',error);
    }
}
fetchNews()


function displayNews(articles){
    const newsDiv = document.querySelector('#news');

    for(const article of articles){
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('col-md-2');

        const card = document.createElement('div');
        card.classList.add('card');
        articleDiv.appendChild(card);

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        cardBody.style.overflow = "auto";
        cardBody.style.maxHeight= "500px";
        card.appendChild(cardBody);

        const image = document.createElement('img');
        image.src = article.urlToImage;
        image.alt = "news image";
        // image.class="card-img-top";
        image.classList.add('img-fluid')
        if(article.urlToImage===null){
            continue
        }
        else{
            cardBody.appendChild(image);
        }
        
        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = article.title;
        cardBody.appendChild(cardTitle);

        const author = document.createElement('p');
        author.textContent =` Author: ${article.author}`;
        author.classList.add('card-text');
        cardBody.appendChild(author);

        const description = document.createElement('p');
        description.textContent = article.description;
        description.classList.add('card-text');
        cardBody.appendChild(description);

        const cardUrl = document.createElement(`a`);
        cardUrl.href = article.url;
        cardUrl.style.display = 'block';
        cardUrl.textContent = `Read more`;
        cardBody.appendChild(cardUrl);

        const source = document.createElement('p');
        source.textContent = `Source: ${article.source.name}`;
        source.classList.add('card-text');
        cardBody.appendChild(source);
        
        newsDiv.appendChild(articleDiv);
    }
}





const apiKey = process.env.NEWS_API_KEY;


// let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
// let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`


// async function fetchNews(){
//     try{
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(data);

//         displayNews(data.articles);
//     }
//     catch(error){
//         console.log('There was an error',error);
//     }
// }
// fetchNews()


async function fetchNews(url){
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
fetchNews(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);

// function displayNews(articles){
//     const newsDiv = document.querySelector('#news');
//     for(const article of articles){
//         const articleDiv = document.createElement('div');
//         articleDiv.classList.add('card');
        
//         // create and apend a headline to the article div
//         const title = document.createElement('h4');
//         title.textContent = article.title;
//         articleDiv.appendChild(title);

//         // create and append more elements to article div
        
//         const author = document.createElement('p');
//         author.textContent =` Author: ${article.author}`;
//         articleDiv.appendChild(author);

//         const image = document.createElement('img');
//         image.src = article.urlToImage;
//         image.alt = "news image";
//         image.width = 500;
//         image.height = 300;
//         articleDiv.appendChild(image);

//         const content = document.createElement('p');
//         content.textContent = article.content;
//         articleDiv.appendChild(content);

//         const source = document.createElement('p');
//         // source.textContent = article.source;
//         source.textContent = `Source: ${article.source.name}`;
//         articleDiv.appendChild(source);
        
//         newsDiv.appendChild(articleDiv);

//     }
// }


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
        image.classList.add('img-fluid')
        if(article.urlToImage===null){
            continue
        }
        else{
            cardBody.appendChild(image);
        }
        // cardBody.appendChild(image);

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

let Header = document.querySelector('h1');
let SearchButton = document.querySelector('#searchButon');
SearchButton.addEventListener('click',changeHeadLines);

function changeHeadLines(){

    let answer = prompt('What are you looking for');
    Header.textContent = `Search: ${answer}`;
    fetchNews(`https://newsapi.org/v2/everything?q=${answer}&apiKey=${apiKey}`);     
}
    
    // url = `https://newsapi.org/v2/top-headlines?category=business&country=us&apiKey=${apiKey}`
    

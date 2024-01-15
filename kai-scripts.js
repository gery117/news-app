const apiKey = process.env.NEWS_API_KEY;

async function fetchNews(url){
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        displayNews(data);
    }catch(e){
        console.error('bla', e);
    }
}

fetchNews(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
document.querySelector('button').addEventListener('click', search);

function displayNews(obj){
    for (i = 0; i < 6; i++){
        const card = document.querySelectorAll('.grid-item')[i];
        const article = obj.articles[i];
        card.textContent = null;

        if(article.urlToImage){
            const img = document.createElement('img');
            img.src = article.urlToImage;
            img.alt = 'Sorry, image error.';
            card.appendChild(img);
        }
        

        const title = document.createElement('p');
        title.innerHTML = article.title;
        title.style.margin = '5px';
        card.appendChild(title);

        const br = document.createElement('br');
        card.appendChild(br);

        const link = document.createElement('a');
        link.style.margin = '5px';
        link.href = article.url;
        link.textContent = 'Read More';
        card.appendChild(link);
    }
}

function search(){
    const q = prompt('what would you like to search for?');
    document.querySelector('h1').textContent = `Search: ${q}`
    fetchNews(`https://newsapi.org/v2/everything?q=${q}&apiKey=${apiKey}`);
}
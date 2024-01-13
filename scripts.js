const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${a10d56a575c34c148fe233632eeb55d3}`

async function fetchNews(){
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        // add function call
    }
    catch(error){
        console.log('There was an error',error);
    }
}

fetchNews()



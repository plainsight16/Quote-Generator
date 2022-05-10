let quoteText = document.getElementById("quoteText");
let quoteAuthor = document.getElementById("quoteAuthor");
const quoteContainer = document.querySelector(".quote-container");
const newQuoteBtn = document.getElementById("newQuote");
const twitterBtn = document.getElementById("twitterBtn");
const loader = document.querySelector(".loader");




let Quotes = [];

async function getQuotes(){
    const apiURL = `https://type.fit/api/quotes`;
    try{
        const response = await fetch (apiURL);
        Quotes = await response.json();
        getRandomQuote(Quotes);
    }catch(err){
        console.log(err);
    }
   
    
}

const getRandomQuote = () =>{
    loading();
    const randomNumber = (max) =>{
        return Math.floor(Math.random() * Math.floor(max))
    }

    const quote = Quotes[randomNumber(Quotes.length)];

    
    renderContent(quote);
}

const renderContent = (quote) =>{
    const {text, author} = quote;
    quoteText.textContent = text;
    quoteAuthor.textContent = author == null ? "-Unknown" : `-${author}`;
    complete();
}


const loading = () =>{
    loader.hidden = false;
    quoteContainer.hidden = true;
}
const complete = () =>{
    loader.hidden = true;
    quoteContainer.hidden = false;
}
const twitterPost = () =>{
    const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} ${quoteAuthor.textContent}`
    window.open(twitterURL, "_blank");
}

loading();
getQuotes();

newQuoteBtn.addEventListener("click", getRandomQuote);

twitterBtn.addEventListener("click", twitterPost);



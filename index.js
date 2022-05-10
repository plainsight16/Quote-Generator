let Quotes = [];

async function getQuotes(){
    const apiURL = `https://type.fit/api/quotes`;
    try{
        const response = await fetch (apiURL);
        Quotes = await response.json();
        console.log(newQuote(Quotes));
    }catch(err){
        console.log(err);
    }
   
    
}
getQuotes();

const newQuote = () =>{
    const randomNumber = (max) =>{
        return Math.floor(Math.random() * Math.floor(max))
    }

    const quote = Quotes[randomNumber(Quotes.length)];

    
    return quote;
}

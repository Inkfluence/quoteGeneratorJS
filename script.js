const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');


let apiQuotes = [];

// Show new quote
function newQuote(){
//  pick up a random quote fro, aapiQuote
const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
// if Author is blank replace it with unknown
if(!quote.author){
    authorText.textContent = 'Unknown';
}else {
    authorText.textContent =quote.author;
}
// check quote length top deteermine styling
if(quote.text.length >50){
    quoteText.classList.add('long-quote');
}else{
    quoteText.classList.remove('long-quote');
}

quoteText.textContent =quote.text;
}
// Get Quotes from API
 async function getQuotes(){
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try{
        const response = await fetch(apiUrl);
        
        // converting the response to json
   apiQuotes = await response.json(); 
   newQuote();
    } catch (error){
        
        // catch error here

    }
 }

//  tweet
function tweetQuote(){{
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${author.textContent} `;
    window.open(twitterUrl, '_blank');
}}
// event listeners 
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click',tweetQuote);

//  on load 
getQuotes();
const loadQuotes = () => {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => displayQuote(data));
};
const displayQuote = (quotes) => {
  const quoteEelement = document.getElementById("quote");
  quoteEelement.innerText = quotes.quote;
  console.log(quotes.quote);
};

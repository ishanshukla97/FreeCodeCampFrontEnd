var paragraph = document.getElementById('quoteText');
var authorDisplay = document.getElementById('quoteAuthor');
var btn = document.getElementById('btn');
var quotes = ["first quote", "second quote", "third quote", "4th quote"];
var author = ["first author", "second author", "third author", "author 4"];

btn.onclick = function update(){
  var randIndex = Math.floor(Math.random()*4);
  var authorIndex = randIndex;
  var displayQuote = quotes[randIndex];
  var displayAuthor = author[authorIndex];
  console.log(displayAuthor);
  paragraph.textContent = displayQuote;
  authorDisplay.textContent = displayAuthor;

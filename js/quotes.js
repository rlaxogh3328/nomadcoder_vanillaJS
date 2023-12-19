const quotes = [
  {
    quote: "The way to get started is to quit talking and begin.",
    author: "Walt Disney",
  },
  {
    quote: "Do not try to be original, just try to be good.",
    author: "Paul Rand",
  },
  {
    quote: "Do not be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    quote:
      "If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.",
    author: "Martin Luther King Jr.",
  },
  {
    quote: "대충 흑백사진에 따옴표를 쓰면 명언같다.",
    author: "이병건",
  },
  {
    quote: "Three can keep a secret, if two of them are dead.",
    author: "Benjamin Franklin",
  },
  {
    quote: "To be or not to be, that is the question.",
    author: "William Shakespeare",
  },
  {
    quote: "To err is human; to forgive, divine.",
    author: "Alexander Pope",
  },
  {
    quote: "Just Do It.",
    author: "NIKE",
  },
  {
    quote: "I will drink beer till I die.",
    author: "T.H. Kim",
  },
];

const LENGTH_OF_QUOTES = quotes.length;
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * LENGTH_OF_QUOTES)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

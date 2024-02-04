const quotes = [
  {
    quote: "Only I can change me life, no one can do it for me.",
    author: "Carol Burnett",
  },
  {
    quote:
      "Life can only be understood backwards; but it must be lived forwards.",
    author: "Søren Kierkegaard",
  },
  {
    quote:
      "The two most important days in your life are the day you are born and the day you find out why.",
    author: "Mark Twain",
  },
  {
    quote: "Great minds have purposes, others have wishes.",
    author: "Washington Irving",
  },
  {
    quote: "It is better to fail in originality than to succeed in imitation. ",
    author: "Herman Melville",
  },
  {
    quote: "Grind Hard, Shine Hard.",
    author: "Dwayne Johnson",
  },
  {
    quote:
      "The ones who are crazy enough to think they can change the world, are the ones that do.",
    author: "Anonymous",
  },
  {
    quote:
      "But I know, somehow, that only when it is dark enough can you see the stars.",
    author: "Martin Luther King, Jr",
  },
  {
    quote:
      "Success is not final. failure is not fatal. It is the courage to continue that counts.",
    author: "Winston S. Churchill",
  },
  {
    quote:
      "I've missed more than 9,000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.",
    sauthor: "Michael Jordan",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
//:nth-child(1) == :first-child
//CSS counting does not start from 0.
//JS counting starts from 0 :)

// for (let i = 0; i < quotes.length; i++) {
//   console.log(quotes[i]);
// }

// const randomNumber = Math.floor(Math.random() * quotes.length);
// console.log(randomNumber);
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

// console.log(quotes[0]); //0부터 시작
//Math.random() --> 랜덤 //Math.random()*10 --> 1-9 랜덤한 수
//Math.round() --> 반올림 //Math.ceil() --> 올림 //Math.floor() --> 내림

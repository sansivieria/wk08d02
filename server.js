// i had previously not turned this in, this is a clean repo with my commit's in order for a more user friendly github push

const express = require('express');
const app = express();
const port = 3000;

// 8 ball model with fortune string

const fortune = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
];

// exercise 1

app.get('/greeting/:name', (req, res) => {
  res.send(`<h1>hello ${req.params.name}</h1>`);
});

// exercise 2
app.get('/tip/:total/:tipPercentage', (req, res) => {
  const totalBill = (parseInt(req.params.total, 10))*((parseInt(req.params.tipPercentage, 10))/100);
  res.send`${totalBill}`;
});
// exercise 3
app.get('/magic/:phrase', (req, res) => {
  const fortune = Math.floor(Math.random() * responses.length);
  res.send(`<h2>${fortune[answer]}</h2>`);
});

// exercise 4


// server routing

app.listen(PORT,() => {
   console.log("WHO IS THAT ANDRE ", PORT);
});

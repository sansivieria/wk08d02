const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req,res) => {
  res.send('<h1> 99 bottles of beer on the wall</h1><a href = "/98">take one down, pass it around</a>')
})

app.get('/:number_of_bottles', (req,res) => {
  const brewskis = parseInt(req.params.number_of_bottles);
    if(brewskis === 0) {
      res.send('<h1>we are out of allada beer on the wall'</h1> <a href = "/reload beers</a>")
  } else {
      res.send(`<h1> ${brewskis} bottles of beer on the wall</h1> <a href="/${brewskis-1}">take one down pass it around</a>`)
    }
})

app.listen(PORT, () => {
  console.log("you are now tuned into ", PORT)
})

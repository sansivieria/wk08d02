// i had previously not turned this in, this is a clean repo with my commit's in order for a more user friendly github push

const express = require('express');
const app = express();
const port = 3000;

// exercise 1

app.get('/greeting/:name', (req, res) => {
  res.send(`<h1>hello ${req.params.name}</h1>`);
});

// exercise 2

// exercise 3

// exercise 4


// server routing

app.listen(PORT,() => {
   console.log("WHO IS THAT ANDRE ", PORT);
});

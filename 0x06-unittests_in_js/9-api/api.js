const express = require('express');

app = express();
port = 7865;

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const { id } = req.params;
  if (isNaN(id)) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.send();
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.send(`Payment methods for cart ${id}`);
  }
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;

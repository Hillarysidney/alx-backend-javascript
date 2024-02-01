const express = require('express');

app = express();
app.use(express.json());
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

app.get('/available_payments', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'texh/plain');
  res.send({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

app.post('/login', (req, res) => {
  const userName = req.body.userName;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send(`Welcome ${userName}`);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;

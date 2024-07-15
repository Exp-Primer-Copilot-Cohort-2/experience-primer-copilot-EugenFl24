// create web server
const express = require('express');
const app = express();
const port = 3000;

// static folder
app.use(express.static('public'));

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// get comments
const comments = [
  {
    name: 'John',
    message: 'Hello'
  },
  {
    name: 'Jane',
    message: 'Hi'
  }
];

// get comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// post comments
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json({
    message: 'Comment added'
  });
});

// listen
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
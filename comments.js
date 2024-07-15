// create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// import comments.js
const comments = require('./comments');

app.use(bodyParser.json());

// get comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// add comment
app.post('/comments', (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment });
  res.json({ message: 'comment added' });
});

// start web server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
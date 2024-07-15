// Create web server
// npm install express body-parser
// npm install --save-dev nodemon
// npm install --save cors

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const comments = require('./data/comments');

const app = express();
const port = 4001;

app.use(bodyParser.json());
app.use(cors());

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const { body } = req;
  const newComment = {
    id: comments.length + 1,
    body,
    username: 'user',
  };
  comments.push(newComment);
  res.json(newComment);
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
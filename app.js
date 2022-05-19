// app.js

const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
var cors = require('cors');
// routes
const books = require('./routes/api/books');
const Book = require('./models/ToBeModerated');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// use Routes
app.use('/api/books', books);

const port = process.env.PORT || 3000;

const data = {
  author: 'author',
  journalName: 'asd',
  yearOfPublication: 'asd',
};

Book.create(data)
  .then(console.log('working'))
  .catch((err) => console.log(err));

app.use(express.static(path.join(__dirname, '/frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'));
});

app.listen(port, () => console.log(`Server running on port ${port}`));

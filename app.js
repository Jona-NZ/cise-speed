// app.js

const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
var cors = require('cors');
// routes
const articles = require('./routes/api/articles');
const analyst = require('./routes/api/analyst');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// use Routes
app.use('/api/articles', articles);
app.use('/api/analyst', analyst);

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'));
});

app.listen(port, () => console.log(`Server running on port ${port}`));

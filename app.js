// app.js

const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
var cors = require('cors');
const http = require('http');

// routes
const articles = require('./routes/api/articles');
const analyst = require('./routes/api/analyst');
const admin = require('./routes/api/admin');

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
app.use('/api/admin', admin);

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'));
});

const httpServer = new http.Server(app);
const server = httpServer.listen(port, () =>
  console.log(`Server running on port ${port}`)
);

// app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = {
  server,
};

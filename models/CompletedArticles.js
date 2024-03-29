// models/CompletedArticles.js

const mongoose = require('mongoose');

const CompletedArticlesSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  journalName: {
    type: String,
    required: true,
  },
  yearOfPublication: {
    type: String,
    required: true,
  },
  volume: {
    type: String,
  },
  number: {
    type: String,
  },
  pages: {
    type: String,
  },
  doi: {
    type: String,
  },
  extractedText: {
    type: String,
  },
  articleMethodology: {
    type: String,
  },
});

const CompletedArticles = mongoose.model(
  'completedArticles',
  CompletedArticlesSchema,
  'completedArticles'
);

module.exports = CompletedArticles;

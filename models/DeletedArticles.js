// models/DeletedArticles.js

const mongoose = require('mongoose');

const DeletedArticlesSchema = new mongoose.Schema({
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
  reason: {
    type: String,
  },
});

const DeletedArticles = mongoose.model(
  'DeletedArticles',
  DeletedArticlesSchema,
  'DeletedArticles'
);

module.exports = DeletedArticles;

// models/ToBeAnalysed.js

const mongoose = require('mongoose');

const ToBeAnalysedSchema = new mongoose.Schema({
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
});

const ToBeAnalysed = mongoose.model(
  'toBeAnalysed',
  ToBeAnalysedSchema,
  'toBeAnalysed'
);

module.exports = ToBeAnalysed;

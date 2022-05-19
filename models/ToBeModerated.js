// models/ToBeModerated.js

const mongoose = require('mongoose');

const ToBeModeratedSchema = new mongoose.Schema({
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
});

const ToBeModerated = mongoose.model(
  'toBeModerated',
  ToBeModeratedSchema,
  'toBeModerated'
);

module.exports = ToBeModerated;

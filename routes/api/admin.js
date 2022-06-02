const express = require('express');
const router = express.Router();
const CompletedArticles = require('../../models/CompletedArticles');

router.get('/', (req, res) => {
  CompletedArticles.find()
    .then((articles) => res.json(articles))
    .catch((err) => res.status(500).json({}));
});

router.get('/:id', (req, res) => {
  CompletedArticles.findById(req.params.id)
    .then((articles) => res.json(articles))
    .catch((err) => res.status(500).json({}));
});

router.delete('/:id', (req, res) => {
  CompletedArticles.findByIdAndRemove(req.params.id)
    .then(() => res.json({ msg: 'Article deleted successfully' }))
    .catch((err) =>
      res.status(400).json({
        error: 'Unable to delete this article' + err,
      })
    );
});

router.patch('/:id', (req, res) => {
  console.log(req.body);

  CompletedArticles.findByIdAndUpdate(req.params.id, {
    journalName: req.body.journalName,
    author: req.body.author,
    yearOfPublication: req.body.yearOfPublication,
    volume: req.body.volume,
    number: req.body.number,
    pages: req.body.pages,
    doi: req.body.doi,
    extractedText: req.body.extractedText,
    articleMethodology: req.body.articleMethodology,
  })
    .then(() => res.json({ msg: 'Article updated successfully' }))
    .catch((err) =>
      res.status(400).json({
        error: 'Unable to update this article' + err,
      })
    );
});

module.exports = router;
